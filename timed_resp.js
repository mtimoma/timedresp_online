/******************* 
 * Timed_Resp Test *
 *******************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: false
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'timed_resp';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instr_map());
const trials_mapLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_mapLoopBegin, trials_mapLoopScheduler);
flowScheduler.add(trials_mapLoopScheduler);
flowScheduler.add(trials_mapLoopEnd);
flowScheduler.add(instr_rt());
const trials_rtLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_rtLoopBegin, trials_rtLoopScheduler);
flowScheduler.add(trials_rtLoopScheduler);
flowScheduler.add(trials_rtLoopEnd);
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin, blocksLoopScheduler, 5);
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'media/dhnb.png', 'path': './media/dhnb.png'},
    {'name': 'media/denb.png', 'path': './media/denb.png'},
    {'name': 'conditions.xlsx', 'path': './conditions.xlsx'},
    {'name': 'media/dfnb.png', 'path': './media/dfnb.png'},
    {'name': 'media/dgnb.png', 'path': './media/dgnb.png'},
    {'name': 'media/dcnb.png', 'path': './media/dcnb.png'},
    {'name': 'media/danb.png', 'path': './media/danb.png'},
    {'name': 'media/dbnb.png', 'path': './media/dbnb.png'},
    {'name': 'media/ddnb.png', 'path': './media/ddnb.png'}
  ]
});


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo); //may be more important when using online service
  
  return Scheduler.Event.NEXT;
}

var varsClock;
var instr_mapClock;
var map_text;
var map_press;
var learn_rtmapClock;
var ring;
var circle;
var imagestim;
var resp;
var post_mapClock;
var feedbackClock;
var rectangle_feed;
var imagestim_feed;
var instr_rtClock;
var rt_text;
var rt_press;
var post_rtClock;
var instr_rtmapClock;
var rtmap_text;
var rtmap_press;
var rngClock;
var post_rtmapClock;
var globalClock;
var routineTimer;
var t;
var frameN;
var varsComponents;
var continueRoutine;
var _map_press_allKeys = [];
var instr_mapComponents;
var trials_map;
var currentLoop;
var trials_rt;
var blocks;
var trials_rtmap;
var _resp_allKeys;
var learn_rtmapComponents;
var frameRemains;
var success;
var post_mapComponents;
var feedbackComponents;
var _rt_press_allKeys = [];
var ring_color;
var circle_color;
var time_limit = 2.1;
var rt_requirement;
var correct_stim = 0;
var instr_rtComponents;
var post_rtComponents;
var _rtmap_press_allKeys = [];
var instr_rtmapComponents;
var start_time = 0.0;
var rngComponents;
var post_rtmapComponents;

function experimentInit() {
  ////////////////////////////////////////////////////////////////////////
  map_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'map_text',
    text: 'Instructions for learning map\n\nEach symbol corresponds to keys H, U, I, or L\nLearn which key corresponds to which 2 symbols\n\nPress H to begin...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  map_press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_rt"
  rt_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rt_text',
    text: 'Instructions for learning timing\n\nWhen the outer ring meets the circle, press the correct key that corresponds to the symbol\n\nPress H key to begin...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  rt_press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "instr_rtmap"
  rtmap_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rtmap_text',
    text: 'Instructions for forced reaction task\n\nWhen the outer ring meets the circle, press the correct key that corresponds to the symbol\n\nPress H key to begin...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  rtmap_press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  //THE TEXT AND KEYBOARD PRESSES CAN LIKELY BY COMBINED ACROSS ROUTINES//
  ////////////////////////////////////////////////////////////////////////

  // Initialize components for Routine "learn_rtmap"
  ring = new visual.Polygon ({
    win: psychoJS.window, name: 'ring', units : 'height', 
    ori: 0, pos: [0, 0],
    lineWidth: 10, lineColor: new util.Color([-1,-1,-1]),
    fillColor: new util.Color([0, 0, 0]),
    edges: 32, radius: 0.5,
    opacity: 0.4, depth: -3, interpolate: true,
  });
  
  circle = new visual.Polygon ({
    win: psychoJS.window, name: 'circle', units : 'height', 
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([1,1,1]),
    edges: 32, radius: 0.1,
    opacity: 0.4, depth: -2, interpolate: true,
  });
  
  imagestim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imagestim', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1
  });
  resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  rectangle_feed = new visual.Polygon ({
    win: psychoJS.window, name: 'rectangle_feed', units : 'height', 
    ori: 0, pos: [0, 0],
    lineWidth: 10, lineColor: new util.Color(-1.0),
    fillColor: new util.Color([0, 0, 0]),
    edges: 32, radius: 0.1,
    opacity: 1, depth: 0, interpolate: true,
  });
  
  imagestim_feed = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imagestim_feed', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  
  // Clocks for routine
  learn_rtmapClock = new util.Clock();
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var _map_press_allKeys = [];
var instr_STARTED = false;
function instr_map(trials) {
  return function () {
    //------Loop for each frame of Routine 'instr_map'-------
    let continueRoutine = true; // until we're told otherwise
    
    // *map_text* updates
    if (!instr_STARTED) {
      map_text.setAutoDraw(true);
      psychoJS.window.callOnFlip(function() { map_press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { map_press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { map_press.clearEvents(); });
      instr_STARTED = true;
    }

    if (instr_STARTED) {
      let theseKeys = map_press.getKeys({keyList: ['h'], waitRelease: false});
      _map_press_allKeys = _map_press_allKeys.concat(theseKeys);
      if (_map_press_allKeys.length > 0) {
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      map_text.setAutoDraw(false);
      instr_STARTED = false;
      ring.opacity = 0.0;
      circle.opacity = 0.0;
      time_limit = 10;
      routineTimer.reset();
      return Scheduler.Event.NEXT;
    }
  };
}

function instr_rt(trials) {
  return function () {
    //------Loop for each frame of Routine 'instr_map'-------
    let continueRoutine = true; // until we're told otherwise
    
    // *map_text* updates
    if (!instr_STARTED) {
      rt_text.setAutoDraw(true);
      psychoJS.window.callOnFlip(function() { rt_press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rt_press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rt_press.clearEvents(); });
      instr_STARTED = true;
    }

    if (instr_STARTED) {
      let theseKeys = rt_press.getKeys({keyList: ['h'], waitRelease: false});
      _rt_press_allKeys = _rt_press_allKeys.concat(theseKeys);
      if (_rt_press_allKeys.length > 0) {
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      rt_text.setAutoDraw(false);
      instr_STARTED = false;
      ring.opacity = 0.3;
      circle.opacity = 0.3;
      time_limit = 2.1;
      routineTimer.reset();
      return Scheduler.Event.NEXT;
    }
  };
}

function instr_rtmap(trials) {
  return function () {
    //------Loop for each frame of Routine 'instr_map'-------
    let continueRoutine = true; // until we're told otherwise
    
    // *map_text* updates
    if (!instr_STARTED) {
      rtmap_text.setAutoDraw(true);
      psychoJS.window.callOnFlip(function() { rtmap_press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rtmap_press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rtmap_press.clearEvents(); });
      instr_STARTED = true;
    }

    if (instr_STARTED) {
      let theseKeys = rtmap_press.getKeys({keyList: ['h'], waitRelease: false});
      _rtmap_press_allKeys = _rtmap_press_allKeys.concat(theseKeys);
      if (_rtmap_press_allKeys.length > 0) {
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      rtmap_text.setAutoDraw(false);
      instr_STARTED = false;
      routineTimer.reset();
      return Scheduler.Event.NEXT;
    }
  };
}

function trials_mapLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_map = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 100, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions.xlsx',
    seed: undefined, name: 'trials_map'
  });
  psychoJS.experiment.addLoop(trials_map); // add the loop to the experiment
  currentLoop = trials_map;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrials_map of trials_map) {
    const snapshot = trials_map.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(learn_rtmapRoutineBegin(snapshot));
    thisScheduler.add(learn_rtmapRoutineEachFrame(snapshot));
    thisScheduler.add(learn_rtmapRoutineEnd(snapshot));
    thisScheduler.add(post_mapRoutine(snapshot));
    thisScheduler.add(feedbackRoutineBegin(snapshot));
    thisScheduler.add(feedbackRoutineEachFrame(snapshot));
    thisScheduler.add(feedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, trials_map));
  }
  trials_map.finished = false;
  return Scheduler.Event.NEXT;
}
function trials_mapLoopEnd() {
  psychoJS.experiment.removeLoop(trials_map);
  return Scheduler.Event.NEXT;
}

function trials_rtLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_rt = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 100, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions.xlsx',
    seed: undefined, name: 'trials_rt'
  });
  psychoJS.experiment.addLoop(trials_rt); // add the loop to the experiment
  currentLoop = trials_rt;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrials_rt of trials_rt) {
    const snapshot = trials_rt.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(learn_rtmapRoutineBegin(snapshot));
    thisScheduler.add(learn_rtmapRoutineEachFrame(snapshot));
    thisScheduler.add(learn_rtmapRoutineEnd(snapshot));
    thisScheduler.add(post_rtRoutine(snapshot));
    thisScheduler.add(feedbackRoutineBegin(snapshot));
    thisScheduler.add(feedbackRoutineEachFrame(snapshot));
    thisScheduler.add(feedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, trials_rt));
  }
  trials_rt.finished = false;
  return Scheduler.Event.NEXT;
}
function trials_rtLoopEnd() {
  psychoJS.experiment.removeLoop(trials_rt);
  return Scheduler.Event.NEXT;
}

function blocksLoopBegin(thisScheduler,nBlocks) {
  // set up handler to look after randomisation of conditions etc
  blocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: nBlocks, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'blocks'
  });
  psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
  currentLoop = blocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBlock of blocks) {
    const snapshot = blocks.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(instr_rtmap());
    const trials_rtmapLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trials_rtmapLoopBegin, trials_rtmapLoopScheduler);
    thisScheduler.add(trials_rtmapLoopScheduler);
    thisScheduler.add(trials_rtmapLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }
  return Scheduler.Event.NEXT;
}

function trials_rtmapLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_rtmap = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 5, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions.xlsx',
    seed: undefined, name: 'trials_rtmap'
  });
  psychoJS.experiment.addLoop(trials_rtmap); // add the loop to the experiment
  currentLoop = trials_rtmap;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrials_rtmap of trials_rtmap) {
    const snapshot = trials_rtmap.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(rngRoutine(snapshot));
    thisScheduler.add(learn_rtmapRoutineBegin(snapshot));
    thisScheduler.add(learn_rtmapRoutineEachFrame(snapshot));
    thisScheduler.add(learn_rtmapRoutineEnd(snapshot));
    thisScheduler.add(post_rtmapRoutine(snapshot));
    thisScheduler.add(feedbackRoutineBegin(snapshot));
    thisScheduler.add(feedbackRoutineEachFrame(snapshot));
    thisScheduler.add(feedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}
function trials_rtmapLoopEnd() {
  psychoJS.experiment.removeLoop(trials_rtmap);
  return Scheduler.Event.NEXT;
}
function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);
  return Scheduler.Event.NEXT;
}

function learn_rtmapRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'learn_rtmap'-------
    t = 0;
    learn_rtmapClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    resp.early = 0;
    resp.late = 0;
    routineTimer.reset(time_limit);

    imagestim.setImage(imStim);
    resp.keys = undefined;
    resp.rt = undefined;
    _resp_allKeys = [];
    // keep track of which components have finished
    learn_rtmapComponents = [];
    learn_rtmapComponents.push(ring);
    learn_rtmapComponents.push(circle);
    learn_rtmapComponents.push(imagestim);
    learn_rtmapComponents.push(resp);
    
    for (const thisComponent of learn_rtmapComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

var frameRemains;
function learn_rtmapRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'learn_rtmap'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = learn_rtmapClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ring* updates
    if (t >= 0.0 && circle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ring.tStart = t;  // (not accounting for frame time here)
      ring.frameNStart = frameN;  // exact frame index
      ring.setAutoDraw(true);
      circle.setAutoDraw(true);
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp.clearEvents(); });
    }

    if (ring.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ring.setRadius(0.1 + (0.05 * routineTimer.getTime()));
    }

    // *imagestim* updates
    if (t >= start_time && imagestim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imagestim.tStart = t;  // (not accounting for frame time here)
      imagestim.frameNStart = frameN;  // exact frame index
      imagestim.setAutoDraw(true);
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (t >= frameRemains) {
      ring.setAutoDraw(false);
      circle.setAutoDraw(false);
      imagestim.setAutoDraw(false);
      resp.status = PsychoJS.Status.FINISHED;

      continueRoutine = false;
    }
    
    if (resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp.getKeys({keyList: ['h', 'u', 'i', 'l'], waitRelease: false});
      _resp_allKeys = _resp_allKeys.concat(theseKeys);
      if (_resp_allKeys.length > 0) {
        resp.keys = _resp_allKeys[0].name;  // just the first key pressed
        resp.rt = _resp_allKeys[0].rt;
        // was this correct?
        if (resp.keys == CorrResp) {
            resp.corr = 1;
        } else resp.corr = 0;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function learn_rtmapRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'learn_rtmap'-------
    for (const thisComponent of learn_rtmapComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (resp.keys === undefined) {
      if (['None','none',undefined].includes(CorrResp)) {
         resp.corr = 1;  // correct non-response
      } else {
         resp.corr = 0;  // failed to respond (incorrectly)
      }
    }

    resp.stop()
    if ((resp.keys == null)) {
        resp.early = 0;
        resp.late = 1;
    }

    // the Routine "learn_rtmap" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var success;
var post_mapComponents;
function post_mapRoutine(trials) {
  return function () {
    //------Prepare to start Routine 'post_map'-------
    t = 0;
    frameN = -1;
    // update component parameters for each repeat
    if (resp.corr) {
        success = [0, 1, 0];
        correct_stim += 1;
    } else {
        success = [1, 0, 0];
        correct_stim = 0;
    }
    if ((correct_stim >= 16)) {
        trials_map.finished = true;
        correct_stim = 0;
    }

    return Scheduler.Event.NEXT;
  };
}

function feedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    frameN = -1;
    routineTimer.reset(1.000000);
    // update component parameters for each repeat
    rectangle_feed.setLineColor(new util.Color(success));
    imagestim_feed.setColor(new util.Color(success));
    imagestim_feed.setImage(imStim);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(rectangle_feed);
    feedbackComponents.push(imagestim_feed);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function feedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rectangle_feed* updates
    if (imagestim_feed.status === PsychoJS.Status.NOT_STARTED) {
      rectangle_feed.setAutoDraw(true);
      imagestim_feed.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // refresh the screen if continuing
    if (routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function feedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'feedback'-------
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}

function post_rtRoutine(trials) {
  return function () {
    //------Prepare to start Routine 'post_map'-------
    t = 0;
    frameN = -1;
    // update component parameters for each repeat
    if (((! resp.late) && (resp.rt < (time_limit - 0.2)))) {
        resp.early = 1;
    }
    if (((resp.corr && (! resp.early)) && (! resp.late))) {
        success = [0, 1, 0];
        correct_stim += 1;
    } else {
        success = [1, 0, 0];
        correct_stim = 0;
    }
    if ((correct_stim >= 4)) {
        trials_rt.finished = true;
        correct_stim = 0;
    }

    return Scheduler.Event.NEXT;
  };
}

function rngRoutine(trials) {
  return function () {
    start_time = Math.random() + 1;
    return Scheduler.Event.NEXT;
  };
}

function post_rtmapRoutine(trials) {
  return function () {
    // update component parameters for each repeat
    if (((! resp.late) && (resp.rt < (time_limit - 0.2)))) {
        resp.early = 1;
    }
    if (((resp.corr && (! resp.early)) && (! resp.late))) {
        success = [0, 1, 0];
    } else {
        success = [1, 0, 0];
    }

    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('resp.keys', resp.keys);
    psychoJS.experiment.addData('resp.corr', resp.corr);
    if (typeof resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp.rt', resp.rt);
    }
    psychoJS.experiment.addData('resp.early', resp.early);
    psychoJS.experiment.addData('resp.late', resp.late);
    psychoJS.experiment.addData('start_time', start_time);
    
    return Scheduler.Event.NEXT;
  };
}

function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }

  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
