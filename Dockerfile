FROM ubuntu:latest
RUN apt-get update \
  && apt-get install -y python3-pip python3-dev \
  && cd /usr/local/bin \
  && ln -s /usr/bin/python3 python \
  && pip3 install --upgrade pip
RUN apt-get install -y curl sudo git
RUN curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
RUN apt-get install -y nodejs
RUN git clone https://github.com/mushroom2/event_plan.git
WORKDIR "/event_plan"
RUN ls -la
RUN pip install -r requrements.txt
RUN npm install webpack -g
WORKDIR "/event_plan/static"
RUN npm install
RUN npm run build
WORKDIR "/event_plan"
CMD python fb_event_plan.py