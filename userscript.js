// ==UserScript==
// @name     AD increase update rate
// @version  1
// @grant    none
// @match    https://ivark.github.io/AntimatterDimensions/*
// ==/UserScript==


setInterval( ()=>{
  
  var Hz = 144;
  var updateRate = 1000/(Hz+30)
  
  var currRefreshrate = unsafeWindow.player?.options?.updateRate ?? -1;
  if ( currRefreshrate == -1 ) return;
  
  
  if ( currRefreshrate != updateRate ) {

    console.log('Found update rate at '+ currRefreshrate +'ms ('+ Math.round(1000/currRefreshrate) +'Hz), increasing to '+ Hz +'Hz' )

    unsafeWindow.player.options.updateRate = updateRate
    unsafeWindow.GameOptions.refreshUpdateRate()

  }
  
}, 1000 );
