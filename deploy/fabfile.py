import sys, json, os, time

# Necessary for logger
sys.path.append(os.path.dirname(os.path.abspath(__file__)) + '/..')

# Fabric imports
from fabric import task
import utils

# Configure hosts
aws_stag = {}
aws_stag['host'] = 'ubuntu@portic.sopradigitalfactory.com'
aws_stag['connect_kwargs'] = {"key_filename": os.path.expanduser("~") +  "/.ssh/951-digitalfactory-portic.pem"}

my_hosts = [aws_stag]
#my_hosts = [aws_pro]

# Create logger
logger = utils.get_logger()


def print_init_banner(message):
    logger.info("++++++++++++++++++++++++++++++")
    logger.info(message)
    logger.info("++++++++++++++++++++++++++++++")

def print_end_banner(message = 'DONE!'):
    logger.info("++++++++++++++++++++++++++++++")
    logger.info(message)
    logger.info("++++++++++++++++++++++++++++++")

def get_repo_folder(repo):
    # Get repo folder from URL
    repo_folder = repo.split('/')[-1]
    if repo_folder.endswith('.git'):
        repo_folder = repo_folder[:-len('.git')]
    return repo_folder

# Configuration parameters
config = {}
try:
    with open('config.json') as json_file:
        config = json.load(json_file)
except FileNotFoundError:
    logger.error("Config file not found")
    sys.exit(0)

print_init_banner("Configuration")
print(json.dumps(config, indent=2))
print_end_banner(" ")

# Select docker folder
docker_folder = './docker'



@task(hosts=my_hosts)
def test(c):
    """
    Testing task
    """
    print_init_banner('Testing task')

    # Update System
    c.run('ls -la', echo=True)

    print_end_banner()

@task(hosts=my_hosts)
def provision(c):
    """
    Installs Dependencies
    """
    print_init_banner('provision: Installs dependencies')

    # Update System
    logger.info("Installing Dependencies ... ")
    c.run('sudo apt update', echo=True)

    # Remove former
    c.run('sudo apt-get remove docker docker-engine docker.io containerd runc', echo=True)

    # Install dependencies
    c.run('sudo apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common', echo=True)

    # Add GPG key
    c.run('sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -', echo=True)

    # Verify
    output = c.run('sudo apt-key fingerprint 0EBFCD88', echo=True)
    if len(output.stdout) <= 0:
        raise Exception("Verification failed")
    
    # Add repository
    c.run('sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"', echo=True)

    # Install docker
    c.run('sudo apt update', echo=True)
    c.run('sudo apt-get -y install docker-ce docker-ce-cli containerd.io', echo=True)
    c.run('docker --version', echo=True)

    # Install nginx    
    c.run('sudo apt-get -y install nginx', echo=True)

    # Install docker-compose
    c.run('sudo curl -L \
            "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" \
            -o /usr/local/bin/docker-compose', echo=True)
    c.run('sudo chmod +x /usr/local/bin/docker-compose', echo=True)
    c.run('docker-compose --version', echo=True)

    # Install certbot
    c.run('sudo add-apt-repository universe', echo=True)
    c.run('sudo add-apt-repository ppa:certbot/certbot', echo=True)
    c.run('sudo apt update', echo=True)
    c.run('sudo apt install -y certbot', echo=True)

    # Add openfortivpn
    c.run('sudo apt install -y openfortivpn', echo=True)
    if c.run('test -d {}'.format('openfortivpn_download'), warn=True).failed:
        pass
    else:
        logger.info("Delete folder")
        c.run('sudo rm -r openfortivpn_download', echo=True)
    c.run('mkdir openfortivpn_download', echo=True)
    with c.cd('openfortivpn_download'):
        c.put('./etc_init_d_openfortivpn.template', remote='./openfortivpn_download')
        c.run('sed -i "s/{{openfortivpn_host}}/' + config['openfortivpn_host'] + '/g" etc_init_d_openfortivpn.template', echo=True)
        c.run('sed -i "s/{{openfortivpn_port}}/' + config['openfortivpn_port'] + '/g" etc_init_d_openfortivpn.template', echo=True)
        c.run('sed -i "s/{{openfortivpn_user}}/' + config['openfortivpn_user'] + '/g" etc_init_d_openfortivpn.template', echo=True)
        c.run('sed -i "s/{{openfortivpn_password}}/' + config['openfortivpn_password'] + '/g" etc_init_d_openfortivpn.template', echo=True)
        c.run('sed -i "s/{{openfortivpn_trusted_cert}}/' + config['openfortivpn_trusted_cert'] + '/g" etc_init_d_openfortivpn.template', echo=True)
        c.run('sudo cp -rv ./etc_init_d_openfortivpn.template /etc/init.d/openfortivpn')
        c.run('sudo chmod 755 /etc/init.d/openfortivpn')
        c.run('sudo update-rc.d openfortivpn defaults')


    # Install sqlclient
    logger.info("Creating folder")
    if c.run('test -d {}'.format('oracle_download'), warn=True).failed:
        pass
    else:
        logger.info("Creating folder")
        c.run('sudo rm -r oracle_download', echo=True)    
    c.run('sudo rm -r oracle_download')        
    c.run('mkdir oracle_download')
    with c.cd('oracle_download'):
        c.run('sudo apt install -y unzip libaio1 alien', echo=True)
        c.run('wget https://download.oracle.com/otn_software/linux/instantclient/19600/oracle-instantclient19.6-basic-19.6.0.0.0-1.x86_64.rpm', echo=True)
        c.run('sudo alien -v oracle-instantclient19.6-basic-19.6.0.0.0-1.x86_64.rpm --scripts', echo=True)
        c.run('sudo dpkg -i oracle-instantclient19.6-basic_19.6.0.0.0-2_amd64.deb', echo=True)
        c.run('wget https://download.oracle.com/otn_software/linux/instantclient/19600/oracle-instantclient19.6-sqlplus-19.6.0.0.0-1.x86_64.rpm', echo=True)
        c.run('sudo alien -v oracle-instantclient19.6-sqlplus-19.6.0.0.0-1.x86_64.rpm --scripts', echo=True)
        c.run('sudo dpkg -i oracle-instantclient19.6-sqlplus_19.6.0.0.0-2_amd64.deb', echo=True)


    print_end_banner()

@task(hosts=my_hosts)
def connectVpn(c):
    """
    Testing task
    """
    print_init_banner('Testing task')

    # Update System
    c.run('sudo service openfortivpn restart', echo=True)

    print_end_banner()

@task(hosts=my_hosts)
def disconnectVpn(c):
    """
    Testing task
    """
    print_init_banner('Testing task')

    # Update System
    c.run('sudo service openfortivpn stop', echo=True)

    print_end_banner()

@task(hosts=my_hosts)
def gitSSH(c):
    """
    Uploads GIT key to clone
    """
    print_init_banner('gitSSH: Uploads keys to download repo')

    # # Generate RSA keys
    # keypath = '~/.ssh/stem'
    # created_rsa_key=False
    # if c.run('test -f {}'.format(keypath), warn=True).failed:
    #     c.run('echo y |ssh-keygen -q -t rsa -N "" -f ~/.ssh/stem', hide=True)
    #     created_rsa_key=True
    # else:
    #     logger.info("Key already exists")
    #
    # # Print public key value
    # output = c.run('cat ~/.ssh/stem.pub', hide=True)
    # logger.info("++++++++++++++++++++++++++++++")
    # logger.info("++ Generated RSA public key ++")
    # logger.info("++++++++++++++++++++++++++++++")
    # print(output.stdout)

    # Upload keys
    logger.info("Upload RSA keys ...")
    # c.put('./deploy/rsa/stem_bitbucket', remote='./.ssh/id_rsa')
    # c.put('./deploy/rsa/stem_bitbucket.pub', remote='./.ssh/id_rsa.pub')
    c.put(config['git_key_public'], remote='./.ssh/id_rsa.pub')
    c.put(config['git_key_private'], remote='./.ssh/id_rsa')



#     # Change permissions
#     c.run('sudo chmod 600 ./.ssh/id_rsa')
#     c.run('sudo chmod 600 ./.ssh/id_rsa.pub')
#     print_end_banner()

@task(hosts=my_hosts)
def nginxLetsencrypt(c):
    """
    Configure lest encrypt and update NGINX
    """
    #logger.error("This needs to be completed")
    print_init_banner('NGINX - LetsEncrypt: Requires certs and configures NGINX')

    logger.info("Getting lets entcript certificates ...")
    nginx_conf_name = 'nginx_conf'
    nginx_conf_path = './' + nginx_conf_name
    c.run('mkdir ' + nginx_conf_name, warn=True)
    with c.cd(nginx_conf_path):
        # Create LetsEncrypt certificate
        c.run('sudo /etc/init.d/nginx stop', echo=True)
        c.run('sudo certbot certonly --standalone -d ' + config['app_domain'] + ' --manual-public-ip-logging-ok --force-renewal', echo=True, warn=True)

        # Generate configuration
        c.put('./nginx_conf.template', remote=nginx_conf_path)
        c.run('sed -i "s/{{ssl_cert}}/\/etc\/letsencrypt\/live\/' + config['app_domain'] +  '\/fullchain.pem/g" nginx_conf.template', echo=True)
        c.run('sed -i "s/{{ssl_key}}/\/etc\/letsencrypt\/live\/' + config['app_domain'] + '\/privkey.pem/g" nginx_conf.template', echo=True)
        c.run('sed -i "s/{{domain}}/' + config['app_domain'] + '/g" nginx_conf.template', echo=True)

        # Set configuration
        c.run('sudo cp -rv ./nginx_conf.template /etc/nginx/sites-available/' + config['app_domain'], echo=True)
        c.run('sudo ln -s /etc/nginx/sites-available/' + config['app_domain'] + ' /etc/nginx/sites-enabled/' + config['app_domain'], echo=True, warn=True)


    logger.info("Restart NGINX ...")
    c.run('sudo /etc/init.d/nginx restart', echo=True)
    print_end_banner()

@task(hosts=my_hosts)
def deploy(c):
    """
    Clones, Pull and launches docker-compose build
    """
    print_init_banner('Deploy: Clones, Pull and launches docker-compose build')

    # Print public key value
    logger.info('Using public RSA key')
    output = c.run('cat ~/.ssh/id_rsa.pub', hide=True)
    print(output.stdout)

    # proceeding to deployment
    logger.info('Deploying to folder ' + config['remote_workspace'])
    if c.run('test -d {}'.format(config['remote_workspace']), warn=True).failed:
        logger.info("Creating folder")
        c.run('mkdir ' + config['remote_workspace'])

    with c.cd(config['remote_workspace']):

        # Get repo folder from URL
        repo_folder = get_repo_folder(config['repository'])

        # Cloning repository
        logger.info('Cloning repository ... ')
        if c.run('test -d {}'.format(repo_folder), warn=True).failed:
            c.run('echo -e "Host github.com\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config')
            c.run('git clone ' + config['repository'], echo=True, pty=True)
        else:
            logger.info('Repository exists skipping')

        # Get latest changes
        logger.info('Get latest changes ... ')
        with c.cd(repo_folder):

            # Fetch all branches
            c.run('git fetch --all ', echo=True, pty=True)

            # Get specific branch
            branch = 'master'
            if  config['branch'] is not None:
                branch = config['branch']

            # Checking whether pull is necessary
            output1 = c.run('git rev-parse {}'.format(branch), echo=True, warn=True)
            output2 = c.run('git rev-parse origin/{}'.format(branch), echo=True)
            # if output1.failed == False and output1.stdout == output2.stdout:
            #     print_end_banner("No changes detected. Aborting. Hash={}".format(output1.stdout))
            #     return

            # Perform pull
            c.run('git checkout {}'.format(branch), echo=True, pty=True)
            c.run('git pull origin {}'.format(branch), echo=True, pty=True)

            if c.run('test -f {}'.format(docker_folder + '/.env'), warn=True).failed:
                c.run('cp -rv ' + docker_folder + '/.env.template ' + docker_folder + '/.env', echo=True)

        # Generate docker image
        print_init_banner('Docker image ... ')
        with c.cd(repo_folder + '/' + docker_folder):
            c.run('sudo docker-compose down', echo=True)
            c.run('sudo docker-compose build', echo=True)

    print_end_banner()

    # Relaunch docker
    launch(c)


@task(hosts=my_hosts)
def launch(c):
    """
    Relaunches docker
    """
    print_init_banner('Relaunches docker')

    # Get repo folder from URL
    repo_folder = get_repo_folder(config['repository'])

    logger.info('Docker image ... ')
    with c.cd(config['remote_workspace'] + '/' + repo_folder + '/' + docker_folder):
        c.run('sudo docker-compose down', echo=True)
        c.run('sudo docker-compose up -d', echo=True)

    print_end_banner()

@task(hosts=my_hosts)
def halt(c):
    """
    halt docker
    """
    print_init_banner('Stop docker')

    # Get repo folder from URL
    repo_folder = get_repo_folder(config['repository'])

    with c.cd(config['remote_workspace'] + '/' + repo_folder + '/docker'):
        c.run('sudo docker-compose down', echo=True)

    print_end_banner()


# @task(hosts=my_hosts)
# def log(c):
#     """
#     Configure logging
#     """

#     # Rsyslog
#     c.put('./rsyslog/60-stem.conf')
#     c.run('sudo mv 60-stem.conf /etc/rsyslog.d/', echo=True)
#     c.run('sudo /etc/init.d/rsyslog restart', echo=True)

#     # Logrotate
#     c.put('./rsyslog/stem-logrotate')
#     c.run('sudo mv stem-logrotate /etc/logrotate.d/', echo=True)



# from fabric import Connection
# if __name__ == "__main__":
#     c = Connection(host='ec2-35-178-81-90.eu-west-2.compute.amazonaws.com', user="ubuntu", connect_kwargs={"key_filename": "/home/vagrant/.ssh/stem.pem"})
#     c.run('ls -la')
