FROM cm2network/steamcmd:latest AS base

RUN mkdir -p /home/steam/.steam/sdk64/
RUN ./steamcmd.sh +login anonymous +app_update 1007 +quit
RUN cp /home/steam/Steam/steamapps/common/Steamworks\ SDK\ Redist/linux64/steamclient.so /home/steam/.steam/sdk64/

RUN ./steamcmd.sh +login anonymous +app_update 2394010 validate +quit
RUN cp /home/steam/steamcmd/steamservice.so /home/steam/.steam/sdk64/

WORKDIR /home/steam/Steam/steamapps/common/PalServer

EXPOSE 8211/udp
RUN mkdir /home/steam/Steam/steamapps/common/PalServer/Pal/Saved
RUN chown steam.steam /home/steam/Steam/steamapps/common/PalServer/Pal/Saved

CMD ["./PalServer.sh", "players=32", "-useperfthreads", "-NoAsyncLoadingThread", "-UseMultithreadForDS"]