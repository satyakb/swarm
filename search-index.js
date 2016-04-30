var searchIndex = {};
searchIndex['swarm'] = {"items":[[3,"Args","swarm","Stores commandline arguments",null,null],[12,"flag_num","","",0,null],[12,"flag_port","","",0,null],[12,"flag_iface","","",0,null],[12,"arg_cfg","","",0,null],[12,"arg_host","","",0,null],[12,"cmd_unleash","","",0,null],[12,"cmd_master","","",0,null],[12,"cmd_slave","","",0,null],[5,"get_default_iface","","Naively gets default internet interface based on OS",null,{"inputs":[],"output":{"name":"string"}}],[5,"main","","Parses commandline arguments",null,{"inputs":[],"output":null}],[5,"get_ip_of_interface","","",null,null],[0,"constants","","",null,null],[17,"VERSION","swarm::constants","",null,null],[17,"USAGE","","",null,null],[0,"member","swarm","",null,null],[3,"Member","swarm::member","Stores necessary parameters for sending a request",null,null],[12,"client","","Hyper client used to sent the request",1,null],[12,"status_code","","Response StatusCode",1,null],[12,"sent","","Whether or not request has been sent",1,null],[12,"success","","Whether or not request was successful",1,null],[12,"duration","","Request duration",1,null],[11,"fmt","","",1,{"inputs":[{"name":"member"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Instantiates Member with a new client",1,{"inputs":[{"name":"member"}],"output":{"name":"member"}}],[11,"send_request","","Sends the request, returns the time taken",1,null],[0,"master","swarm","",null,null],[5,"start","swarm::master","Starts master, parses config file, creates a thread per slave, returns aggregated stats",null,{"inputs":[{"name":"string"}],"output":{"name":"stats"}}],[5,"trigger_slave","","Triggers slave to unleash its swarm",null,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"stats"}}],[5,"aggregate_stats","","Aggregates a vector of stats",null,{"inputs":[{"name":"vec"}],"output":{"name":"stats"}}],[0,"swarm","swarm","",null,null],[3,"Req","swarm::swarm","Holds information needed to perform a request",null,null],[12,"path","","Path to make request to",2,null],[12,"method","","HTTP request method",2,null],[3,"Config","","Swarm config",null,null],[12,"num","","Number of threads to generate/requests to send",3,null],[12,"host","","Min request time in milliseconds",3,null],[12,"seq","","Sequence of requests to send",3,null],[3,"Stats","","Contains all the calculated metrics",null,null],[12,"num","","Number of requests sent",4,null],[12,"total","","Total time taken for all requests in milliseconds",4,null],[12,"mean","","Mean request time in milliseconds",4,null],[12,"min","","Min request time in milliseconds",4,null],[12,"max","","Max request time in milliseconds",4,null],[12,"failed","","Percentage of failed requests",4,null],[3,"Swarm","","Keeps track of necessary parameters for the load testing",null,null],[12,"config","","Config",5,null],[12,"members","","List of members",5,null],[11,"clone","","",2,{"inputs":[{"name":"req"}],"output":{"name":"req"}}],[11,"fmt","","",2,{"inputs":[{"name":"req"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"encode","","",2,{"inputs":[{"name":"req"},{"name":"__s"}],"output":{"name":"result"}}],[11,"decode","","",2,{"inputs":[{"name":"req"},{"name":"__d"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"config"}],"output":{"name":"config"}}],[11,"fmt","","",3,{"inputs":[{"name":"config"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"encode","","",3,{"inputs":[{"name":"config"},{"name":"__s"}],"output":{"name":"result"}}],[11,"decode","","",3,{"inputs":[{"name":"config"},{"name":"__d"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"stats"}],"output":{"name":"stats"}}],[11,"fmt","","",4,{"inputs":[{"name":"stats"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"encode","","",4,{"inputs":[{"name":"stats"},{"name":"__s"}],"output":{"name":"result"}}],[11,"decode","","",4,{"inputs":[{"name":"stats"},{"name":"__d"}],"output":{"name":"result"}}],[11,"pretty_print","","",4,{"inputs":[{"name":"stats"}],"output":null}],[11,"default","","",4,{"inputs":[{"name":"stats"}],"output":{"name":"stats"}}],[11,"fmt","","",5,{"inputs":[{"name":"swarm"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Instantiates a new swarm with the given settings",5,{"inputs":[{"name":"swarm"},{"name":"config"}],"output":{"name":"swarm"}}],[11,"unleash","","Generates all the necessary threads and sends the requests",5,{"inputs":[{"name":"swarm"}],"output":{"name":"result"}}],[11,"stats","","Returns the swarm stats",5,{"inputs":[{"name":"swarm"}],"output":{"name":"stats"}}],[0,"slave","swarm","",null,null],[5,"req_handler","swarm::slave","Handles request from master and unleashes swarm",null,{"inputs":[{"name":"request"},{"name":"response"}],"output":null}],[5,"start","","Starts http server listening for requests from the master",null,{"inputs":[{"name":"str"},{"name":"i64"}],"output":null}],[5,"unleash","","Unleashes the swarm from local machine",null,{"inputs":[{"name":"config"}],"output":{"name":"stats"}}],[11,"decode","swarm","",0,{"inputs":[{"name":"args"},{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"args"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[3,"Args"],[3,"Member"],[3,"Req"],[3,"Config"],[3,"Stats"],[3,"Swarm"]]};
initSearch(searchIndex);