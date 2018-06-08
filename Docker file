FROM harbor.tiejin.cn/closer/umscloud-nginx-nodejs
MAINTAINER lichong <lichong@umscloud.com>

COPY ./*.conf /etc/nginx/conf.d/

RUN mkdir /apps/closer-fe
COPY ./dist/ /apps/closer-fe
WORKDIR /apps/closer-fe

EXPOSE 3603
