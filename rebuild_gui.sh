sudo docker stop bobby_gui && sudo docker rm bobby_gui && sudo docker build -t bobby_gui:1.0 . && sudo docker run -d --restart=unless-stopped -it -p 8080:80 --name bobby_gui bobby_gui:1.0
