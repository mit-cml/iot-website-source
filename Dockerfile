FROM alpine:3.16
MAINTAINER Jeffrey I. Schiller <jis@mit.edu>

RUN apk --update add tzdata nginx logrotate

RUN cp -p /usr/share/zoneinfo/America/New_York /etc/localtime
RUN echo "America/New_York" >/etc/timezone

ADD iot.conf /etc/nginx/http.d/iot.conf
ADD start /etc/start
ADD logger /etc/logger
RUN chmod 755 /etc/start && chmod 755 /etc/logger

RUN mkdir -p /run/nginx
ADD logrotate.nginx /etc/logrotate.d/nginx
RUN mv /etc/periodic/daily/logrotate /etc/periodic/hourly/logrotate && chmod 644 /etc/logrotate.d/nginx
# ADD jis.pem /etc/jis.pem
# ADD passwd /etc/nginx/passwd
ADD docs/build /var/www
ADD ssl /etc/nginx/ssl

CMD /etc/start



