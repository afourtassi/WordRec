import os
import sys
import shutil
import numpy
from optparse import OptionParser
import random
from math import *
import glob
import pprint
import json

def main():
    usage = "usage: %prog [options] CORPUS_TEXT"
    parser = OptionParser(usage)
    (options, args) = parser.parse_args()

    ExpN=args[0]
    subjN=0
    myFiles= glob.glob("../Raw_data/rawdata_experiment"+ExpN+"/*json")
    for f in myFiles:
        cur=open(f,'r')
        cur_json=json.load(cur)
        subjN=subjN+1

#extract info
        id=cur_json["WorkerId"]
        condition=cur_json["answers"]["data"]["data"]["condition"]
        rando=cur_json["answers"]["data"]["data"]["rando"]
        type=cur_json["answers"]["data"]["data"]["tri_type"]
        order=cur_json["answers"]["data"]["data"]["tri_order"]
        block=cur_json["answers"]["data"]["data"]["block"]
        sound_dist=cur_json["answers"]["data"]["data"]["sou_dist"]
        concept_dist=cur_json["answers"]["data"]["data"]["con_dist"]
        answer=cur_json["answers"]["data"]["data"]["answer"]
        RT=cur_json["answers"]["data"]["data"]["rt"]
        problem=cur_json["answers"]["data"]["brief"]["problem"]
        gender=cur_json["answers"]["data"]["brief"]["gender"]
        age=cur_json["answers"]["data"]["brief"]["age"]
        native=cur_json["answers"]["data"]["brief"]["native"]
        ifproblem=cur_json["answers"]["data"]["brief"]["ifproblem"]
        if problem =='':
	    problem='Yes'
    #comment=cur_json["answers"]["data"]["brief"]["comment"]
    
        trials=cur_json["answers"]["data"]["data"]["tri_number"]
        score=0

        for i in range(len(trials)):
	
	    if type[i]=="preTask":
	    
	        if int(order[i])==int(answer[i]):
		    score=score+1

         
            if sound_dist[i]=='':
	        sound_dist[i]='NA'
            if concept_dist[i]=='':
	        concept_dist[i]='NA'
   
        score=float(score)/12 

        for i in range(len(trials)):
	    
            print 'subject_'+str(subjN), condition[i], rando[i], type[i], order[i], block[i], sound_dist[i], concept_dist[i], answer[i], RT[i], score, problem[0], gender[0], age[0], native[0]


 
if __name__ == "__main__":
    main()
    
