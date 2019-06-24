FROM ubuntu:latest
RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential git
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
RUN apt-get install -y nodejs
RUN git clone https://github.com/mushroom2/event_plan.git
WORKDIR event_plan
RUN pip install -r requirements.txt
RUN npm install webpack -g
WORKDIR static
RUN npm install
RUN cd ..
CMD python fb_event_plan.py