#!/bin/bash

ip_name=118.31.238.73
export VUE_APP_BACKEND_SERVER="http://118.178.133.4:9898"
yarn build
# zip -r dist.zip dist/
# scp -r dist.zip root@$ip_name:/data/hitales/dataShow/
# ssh root@$ip_name << eeooff
# cd /data/hitales/dataShow
# rm -rf dist
# unzip -o dist.zip
# exit
# eeooff
# rm -rf dist.zip