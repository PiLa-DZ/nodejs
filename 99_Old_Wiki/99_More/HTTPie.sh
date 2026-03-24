sudo pacman -S python python-pip
mkdir ~/HTTPie
cd ~/HTTPie
python -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install httpie
http --version
deactivate

# How to use HTTPie
cd ~
source venv/bin/activate
# Normal url ==========================================
http localhost:3000/api/user
http localhost:3000/api/user/1
http delete localhost:3000/api/user/1
# Json Body ===========================================
http post localhost:3000/api/user   name=Nabil age:=10
http put  localhost:3000/api/user/1 name=Nabil job:=true
# Querys ==============================================
http localhost:3000/api/user name==Nabil age==10
