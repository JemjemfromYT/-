const confettiAudio = document.getElementById('confettiAudio')
const blowS = document.getElementById("blowS")
const hbdText = document.getElementById("hbdText")

var seong = document.getElementById("seong")

const bulbBrightness = document.getElementById('bulbBrightness');

let seongAngry = document.getElementById("seongAngry")
let jennyNo = document.getElementById("jennyNo")
let thanosHappy = document.getElementById("thanosHappy")

let swiOn = document.getElementById("swiOn")

const startBtn = document.getElementById("startBtn");


setTimeout(()=>{
swiOn.style.opacity="1"
},4500)
swiOn.addEventListener('click', function(){
swiOn.style.display="none" 
borderMask.style.animation=" borderFade 0.7s forwards"
function fadeInElement(element, delay) {
  setTimeout(() => {
    element.style.transition = 'opacity 0.5s';
    element.style.opacity = '1';
  }, delay);
}

// Select each character

const characters = [
  document.getElementById('byeon'),
  document.getElementById('park'),
  seong,
  document.getElementById('stellvester'),
  document.getElementById('jenny'),
  document.getElementById('sae'),
  document.getElementById('yoon'),
  document.getElementById('jiaxu'),
  document.getElementById('kento'),
  document.getElementById('sangyan'),
  document.getElementById('thanos'),
  document.getElementById('front')
];

// Set initial opacity to 0 for all
characters.forEach(el => {
  el.style.opacity = '0';
});

// Apply fade-in with 0.5s delay between each
characters.forEach((el, index) => {
  fadeInElement(el, index * 300);
});


    
    
      //CLICK ANY
setTimeout(()=>{
  startConfetti()
clickAny.style.display="block"
clickAny.textContent="Click any where to continue"
clickAny.style.animation="clickAnyAni 0.5s linear infinite"
  document.body.addEventListener('click',function(){
  clickAny.style.display="none"
  })
},100)
//*CLICK ANY
    
  hbd.play()
  hbdText.style.display="block"
  hbdText.style.animation="hbdTextAni 5s ease-in-out infinite"
  cover.style.display="block"
  bulbOff.style.display = "none";
  bulbOn.style.transition = "0.5s";
  bulbOn.style.opacity = "1";
  document.body.style.background = "white";


  setTimeout(()=>{
    canvas.style.opacity="0";
    canvas.style.transition="1.5s";
    
  },4000)
  
  cover.addEventListener("click", function(){
    console.log("clif")
  cover.style.display="none"
  jenny.style.animation="jennyMoveAni 4.5s forwards"
    cake.style.animation="cakeAni 5s forwards"
  setTimeout(()=>{
          //CLICK ANY
setTimeout(()=>{
clickAny.style.display="block"
clickAny.textContent="Click any where to continue"
clickAny.style.animation="clickAnyAni 0.5s linear infinite"
  document.body.addEventListener('click',function(){
  clickAny.style.display="none"
  })
},100)
//*CLICK ANY
  },5000)
  
setTimeout(()=>{
cover2.style.display="block"
cover2.addEventListener("click", function(){
    hbdH.play()
    cover2.style.display="none"
    b2.style.animation="b2 3s forwards"
    b2t.style.animation="b2 3s forwards"
    b3t.style.animation="b2_ 5s forwards"
    setTimeout(()=>{
    box.style.display="block"
    },6000);
    })
},5000)
    
  });
    
  confettiAudio.play()
  b1.style.animation="bAni 4s forwards"
  b1t.style.animation="btAni 4s forwards"
  blow1.style.animation="blowAni 5s forwards"
  blow2.style.animation="blowAni 5s forwards"
  setTimeout(()=>{
    blowS.play()
  },1000)
  setTimeout(()=>{
    suprise.play()
  },1700)

  
  
})
// ======= CONFETTI SCRIPT =======
  const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];
let confettiActive = false;
let animationId;

function createConfetti() {
  confetti = [];
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 100 + 10,
      color: `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`,
      tilt: Math.floor(Math.random() * 10) - 10,
      tiltAngle: 0
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c) => {
    ctx.beginPath();
    ctx.lineWidth = c.r;
    ctx.strokeStyle = c.color;
    ctx.moveTo(c.x + c.tilt + c.r / 2, c.y);
    ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r);
    ctx.stroke();
  });
  updateConfetti();
}

function updateConfetti() {
  confetti.forEach((c) => {
    c.y += Math.cos(c.d) + 1 + c.r / 2;
    c.x += Math.sin(0.01) * 2;
    c.tiltAngle += 0.05;
    c.tilt = Math.sin(c.tiltAngle) * 15;

    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  });
}

function loop() {
  if (!confettiActive) return;
  drawConfetti();
  animationId = requestAnimationFrame(loop);
}

function startConfetti() {
  stopConfetti();        // Always stop any previous confetti first
  createConfetti();      // Rebuild particles
  confettiActive = true;
  loop();

  setTimeout(() => {
    stopConfetti();
  }, 5000); // auto stop after 5s
}

function stopConfetti() {
  confettiActive = false;
  cancelAnimationFrame(animationId);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function restartConfetti() {
  stopConfetti();        // Force stop first
  createConfetti();      // Rebuild particles
  confettiActive = true;
  loop();

  setTimeout(() => {
    stopConfetti();
  }, 5000); // stop again after 5s
}





//BUTTON EACH CLICK
const buttons = document.querySelectorAll('button');
  const audio = document.getElementById('audioPlayer');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      audio.play();
    });
  });



  function yes1(){
    console.log("yes")
    jennyYes.play()
    b3.style.display="block"
    b5t.style.display="block"
setTimeout(()=>{
  b3.style.display="none"
  b5t.style.display="none"
  jenny.style.display="none"
  setTimeout(()=>{
    jenny.style.display="block"
    jenny.style.animationPlayState = 'paused';
    jenny.style.left="45px"
    jenny.style.top="160px"
    cake.style.display="none"
  },1000)
},2000)

setTimeout(()=>{
  demonBox.style.display="block"
  darkClaim1.style.animation="darkClaim1Ani 2.5s forwards"

setTimeout(()=>{
  demonBox.style.transition="1s"
  demonBox.style.opacity="1"
},2000)
  
},5000)


    
    box.style.display="none"
  }
  
function no1(){
    console.log("no")
    jenny.style.display="none"
    jennyNo.style.display="block"
    b3.style.display="block"
    b4t.style.display="block"
    hbdHNo.play()
    setTimeout(()=>{
    jennyNo.style.display="none"
    b3.style.display="none"
    b4t.style.display="none"
    cake.style.opacity="1"
  
  
  cake.style.animation="cakeThrowAni 0.5s linear infinite"
  
  cake.style.transition="2s"
  cake.style.left="165px"
  cake.style.top="275px"
  cake.style.width="0px"
  cake.style.height="0px"
  cake.style.zIndex="100"
  setTimeout(()=>{
  thanos.style.display="none"
  thanosMouth.style.display="block"
  thanosMouth.style.animation="thanosEatAni 0.5s forwards"
  bite.play()
     setTimeout(()=>{
  thanosMouth.style.display="none"
  thanosHappy.style.display="block"
  thanosHappy.style.animation="thanosAni 2s linear forwards"
    setTimeout(()=>{
    jennyNo.style.display="block"
    jennyNo.style.left="45px"
    jennyNo.style.top="160px"
    frontManTimeCover.style.display="block"
          //CLICK ANY
setTimeout(()=>{
clickAny.style.display="block"
clickAny.textContent="Click anywhere to continue"
clickAny.style.animation="clickAnyAni 0.5s linear infinite"
  document.body.addEventListener('click',function(){
  clickAny.style.display="none"
  })
},100)
//*CLICK ANY
frontManTimeCover.addEventListener('click', function(){
       frontManTime()
       frontManTimeCover.style.display="none"
      })  
    },1000)
  },1000)
  },1000)
  
    
    },3000)
    
    
    box.style.display="none"
  }




function claimed(){
  
  
}

  



function claimed() {
  
  demonS.play()
  let claimed = document.getElementById('claimed');
  claimed.style.zIndex = "105";

  const canvas1 = document.getElementById('canvas1');
  const ctx1 = canvas1.getContext('2d');
  canvas1.width = window.innerWidth;
  canvas1.height = window.innerHeight;

  const fireworkSound = document.getElementById('fireworkSound');

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function Firework(x, y) {
    this.x = x;
    this.y = y;
    this.particles = [];

    for (let i = 0; i < 100; i++) {
      this.particles.push({
        x: x,
        y: y,
        angle: random(0, Math.PI * 2),
        speed: random(2, 5),
        radius: 2,
        alpha: 2
      });
    }

    // Clone and play unique sound per firework
    const soundClone = fireworkSound.cloneNode();
    soundClone.play();
  }

  Firework.prototype.update = function () {
    this.particles.forEach(p => {
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      p.alpha -= 0.02;
    });
  };

  Firework.prototype.draw = function () {
    this.particles.forEach(p => {
      ctx1.beginPath();
      ctx1.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx1.fillStyle = `rgba(${Math.floor(random(100,255))}, ${Math.floor(random(100,255))}, ${Math.floor(random(100,255))}, ${p.alpha})`;
      ctx1.fill();
    });
  };

  let fireworks = [];
  let fireworkCount = 0;

  function animate() {
    requestAnimationFrame(animate);
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    fireworks.forEach(fw => {
      fw.update();
      fw.draw();
    });
    fireworks = fireworks.filter(fw => fw.particles[0].alpha > 0);
  }

  function launchFirework() {
    if (fireworkCount >= 3) return;
    const x = random(100, canvas1.width - 100);
    const y = random(100, canvas1.height / 2);
    fireworks.push(new Firework(x, y));
    fireworkCount++;
  }

  // Launch 3 fireworks only
  launchFirework();
  setTimeout(launchFirework, 800);
  setTimeout(launchFirework, 1600);

  animate();
}











            



function exit1() {
  demonBox.style.display="none"
  darkClaim1.style.animation="darkClaim2Ani 2.5s forwards"
  frontManTime()
}



function frontManTime(){
  setTimeout(()=>{
  whistle.play()
  front.style.animation="frontAni 1s normal"
  setTimeout(()=>{
  front.style.display="none"
    setTimeout(()=>{
    let squidSound = document.getElementById("squidSound")

    whistle.play()
    front.style.display="block"
      setTimeout(()=>{
      let squidSound = document.getElementById("squidSound")
      hbd.volume -= 0.9;
      front.style.animation="frontAni2 1s forwards"
      squidSound.play()
      setTimeout(()=>{
      hbd.volume += 0.9;
      },23000)
         setTimeout(()=>{
          giftBox.style.display="block"
          setTimeout(()=>{
            gift.style.animation="giftAni 1s linear forwards"
            lid.style.animation="lidAni 1s linear forwards"
      //CLICK ANY
setTimeout(()=>{
clickAny2.style.display="block"
clickAny2.textContent="click the ribbon to open"
clickAny2.style.animation="clickAnyAni 0.5s linear infinite"
  lid.addEventListener('click',function(){
  clickAny2.style.display="none"
  })
},100)
//*CLICK ANY

          },1000)
         },1000)
      },1000)

    },100)
  },1000)
},2000)
}

let seongAngryVerification = 0;

//A

//GIFT BOX JS
  function func(){
  
  seongAngry =document.getElementById("seongAngry")
                document.getElementById("lid").style.animation="open 1s forwards";
  setTimeout(()=>{
  cardSquid.style.animation="cardSquidAni 2s forwards"
  lid.style.display="none"
    setTimeout(()=>{
    seongAngry.style.animation="seongAngryAni 1s forwards"
    seong.style.display="none"
    seongAngry.style.display="block"
    b4.style.display="block"
    b6t.style.display="block"
    seongS.play()
      setTimeout(()=>{
        seongAngry.style.animation = "none"; // Remove animation
        seongAngry.offsetHeight; // Force reflow (browser trick)
        darkClaim1.style.animation="squidClaim1Ani 1s forwards"
        squidBox.style.display="block"
        setTimeout(()=>{
        squidBox.style.opacity="1"
        squidBox.style.transition="2s"
        b4.style.display="none"
        b6t.style.display="none"
        },2000)
      },2000)
    },2000)
  },1500)
          
          
          
          
}





function squidClaim(){
  let squidClaim = document.getElementById("squidClaim")
  let vote = document.getElementById("vote")
  squidClaim.textContent="Claimed"
  squidBorGreen.style.display="none"
  vote.play()
  seongAngryVerification+=1;
  
}

function exit2(){
  if(seongAngryVerification == 1){
    seongAngry.style.display="block"
  }else{
    seongAngry.style.display="none"
    seong.style.display="block"
  }
  squidBox.style.display="none"
  darkClaim1.style.animation="squidClaim2Ani 1.5s forwards"
  setTimeout(()=>{
  front.style.opacity="0"
  front.style.display="none"
  front.style.animation = "none"; // Remove animation
front.offsetHeight; // Force reflow (browser trick)
cardSquid.style.display="none"
giftBox.style.display="none"

   setTimeout(()=>{
  front.style.opacity="1"
  front.style.display="block"
    setTimeout(()=>{
      discoBorder.style.display="block"
        //
    },3000)
   },1000)
  },2000)
  
}

//*A

//CONFETTI 2

  const canvas2 = document.getElementById('confetti-canvas2');
  const ctx2 = canvas2.getContext('2d');

  canvas2.width = window.innerWidth;
  canvas2.height = window.innerHeight;

  let confetti2 = [];
  let confettiActive2 = false;
  let animationId2;

  function createConfetti2() {
    confetti2 = [];
    for (let i = 0; i < 350; i++) {
      confetti2.push({
        x: Math.random() * canvas2.width,
        y: Math.random() * canvas2.height - canvas2.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * 100 + 10,
        color: `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`,
        tilt: Math.floor(Math.random() * 10) - 10,
        tiltAngle: 0
      });
    }
  }

  function drawConfetti2() {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    confetti2.forEach((c) => {
      ctx2.beginPath();
      ctx2.lineWidth = c.r;
      ctx2.strokeStyle = c.color;
      ctx2.moveTo(c.x + c.tilt + c.r / 2, c.y);
      ctx2.lineTo(c.x + c.tilt, c.y + c.tilt + c.r);
      ctx2.stroke();
    });
    updateConfetti2();
  }

  function updateConfetti2() {
    confetti2.forEach((c) => {
      c.y += Math.cos(c.d) + 1 + c.r / 2;
      c.x += Math.sin(0.01) * 2;
      c.tiltAngle += 0.05;
      c.tilt = Math.sin(c.tiltAngle) * 15;

      if (c.y > canvas2.height) {
        c.y = -10;
        c.x = Math.random() * canvas2.width;
      }
    });
  }

  function loop2() {
    if (!confettiActive2) return;
    drawConfetti2();
    animationId2 = requestAnimationFrame(loop2);
  }

  function startConfetti2() {
    createConfetti2();
    confettiActive2 = true;
    loop2();

    setTimeout(() => {
      stopConfetti2();
    }, 5000);
  }

  function stopConfetti2() {
    confettiActive2 = false;
    cancelAnimationFrame(animationId2);
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  }



//FIREWORKS 2 JS
// --- Sound Pool Setup ---
const fireworkSounds = [];
for (let i = 0; i < 5; i++) {
  const sound = new Audio("firework.mp3"); // Replace with your sound file
  sound.preload = "auto";
  fireworkSounds.push(sound);
}
let soundIndex = 0;

function playFireworkSound() {
  const sound = fireworkSounds[soundIndex];
  sound.currentTime = 0;
  sound.play().catch(e => console.warn("Sound error:", e));
  soundIndex = (soundIndex + 1) % fireworkSounds.length;
}

// --- Fireworks Function ---
function startFireworks() {
  const canvas = document.getElementById("fireworksCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  }

  function createFirework(x, y) {
    playFireworkSound(); // 🔊 Play on every explosion

    const colors = ["#ff0040", "#ff9900", "#00e5ff", "#00ff90", "#fffc00"];
    for (let i = 0; i < 1000; i++) {
      particles.push({
        x: x,
        y: y,
        radius: 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * 2 * Math.PI,
        speed: random(2, 6),
        alpha: 1,
        decay: random(0.015, 0.03)
      });
    }
  }

  function updateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      const vx = Math.cos(p.angle) * p.speed;
      const vy = Math.sin(p.angle) * p.speed;
      p.x += vx;
      p.y += vy;
      p.speed *= 0.98;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        particles.splice(i, 1);
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 10);
        ctx.fillStyle = `rgba(${hexToRgb(p.color)}, ${p.alpha})`;
        ctx.fill();
      }
    });
    requestAnimationFrame(updateParticles);
  }

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  createFirework(centerX, centerY);

  for (let i = 0; i < 7; i++) {
    setTimeout(() => {
      createFirework(random(100, canvas.width - 100), random(100, canvas.height - 200));
    }, i * 300);
  }

  updateParticles();
}

 //
 


function yes3(){
  bulbOn.style.display="none"
  discoBorder.style.display="none"
  hbd.pause()
  discoS.play()
  gradientBox.style.transition="3s"
  gradientBox.style.opacity="1"
  discoSilver.style.transition="1s"
  discoSilver.style.opacity="1"
  // Start confetti animation again
  startConfetti2()
  seongAngry.style.animation = "none"; // Remove animation
seongAngry.offsetHeight; // Force reflow (browser trick)
sae.style.animation = "none"; // Remove animation
sae.offsetHeight; // Force reflow (browser trick)
  setTimeout(()=>{
  const characters = document.querySelectorAll(
  '.byeon, .jenny, .park, .stellvester, .sae, .yoon, .jiaxu, .kento, .sangyan, .thanos, .seong, .front, jennyAngry, seongAngry, thanosHappy, jennyNo'
);

characters.forEach(el => {
  el.style.animation = 'discoAni1 0.5s infinite';
});
},6500)
  
setTimeout(()=>{
discoSilver.style.animation="discoSilverAni 3s forwards"
   setTimeout(()=>{
//
     discoGold.style.animation="discoGoldAni 3s forwards"
     setTimeout(()=>{
       startDiscoFever()
     },2000)
setTimeout(startConfetti2(), 2000)
const characters2 = document.querySelectorAll(
  '.byeon, .jenny, .park, .stellvester, .sae, .yoon, .jiaxu, .kento, .sangyan, .thanos, .seong, .front, jennyAngry, seongAngry, thanosHappy, jennyNo');
  
  characters2.forEach(el2 => {
  el2.style.animation=" discoAni2 0.5s infinite"
  firework2.style.display="block"
  firework2.addEventListener('click', function(){
  firework2.style.display="none"
  })
  setTimeout(()=>{
  el2.style.animation = "none"; // Remove animation
el2.offsetHeight; // Force reflow (browser trick)
proceed();


},16000)

  
  
});
 //
   },1000)
},19000)








}

const discoCanvas = document.getElementById("discoStage");
  const groovePen = discoCanvas.getContext("2d");


function proceed(){
  discoS.pause()
  console.log("proceed")
  discoGold.style.display="none"
  startDreamEffect()
  startBtn2.style.display="block"
  setTimeout(()=>{
  startBtn2.style.transition="1.5s"
  startBtn2.style.opacity="1"
  discoCanvas.style.transition="1.5s"
  discoCanvas.style.opacity="0"
  setTimeout(()=>{
  discoCanvas.style.display="none"
  },1000)
  },100)
}





/*MESSAGE JS*/

const messageBox = document.getElementById("message");
const sound = document.getElementById("messageS");

const messages = [
  { text: "Happy Birthday Inchet", delay: 4000 },
  { text: "uhmm this is me", delay: 4000 },
  { text: "James", delay: 3000 },
  { text: "or perhaps 'yoi' ", delay: 4000 },
  { text: "So your 18 now", delay: 4000 },
  { text: "I just want you to hope na", delay: 4000 },
  { text: "I hope you to live na masaya XD' ", delay: 4000 },
  { text: "and still be the you ", delay: 4000 },
  { text: "you know? your self.. ", delay: 4000 },
  { text: "your current self rn ", delay: 4000 },
  { text: "hanga ako sayo ", delay: 4000 },
  { text: "hanga ako sayo na ", delay: 4000 },
  { text: "you can be a representative", delay: 6000 },
  { text: "like sa school nyo ", delay: 4300 },
  { text: "like being a leader", delay: 4300 },
  { text: "secretary", delay: 3500 },
  { text: "and back then may madami kang achievements", delay: 4000 },
  { text: "sheesh academic achievers", delay: 4000 },
  { text: "at iba pa", delay: 4000 },
  { text: "at tumakbo bilang auditor", delay: 5000 },
  { text: "kahit hindi ka nanalo ", delay: 5000 },
  { text: "humanga ako ", delay: 4000 },
  { text: "your sounds cool", delay: 4000 },
  { text: "perhaps nasabi kona siguro to dati ", delay: 6500 },
  { text: "incase", delay: 3500 },
  { text: "dont forget I am also one of your fans ", delay: 8000 },
  { text: "hanga din ako sa spirit mo", delay: 6500 },
  { text: "spirit mo sa social media", delay: 6500 },
  { text: "ang energize mo ", delay: 4000 },
  { text: "you have an amazing talent ", delay: 6500 },
  { text: "like guitar' ", delay: 4000 },
  { text: "dancer", delay: 2500 },
  { text: "singer ", delay: 2500 },
  { text: "matalino ", delay: 2500 },
  { text: "at higit sa lahat confidence ", delay: 7000 },
  { text: "you know?", delay: 3500 },
  { text: "sometimes", delay: 3500 },
  { text: "I sommetime envy your beauty", delay: 5000 },
  { text: "like buti kapa", delay: 4000 },
  { text: "buti kapa ang healthy ng physical appearance mo", delay: 7500 },
  { text: "I like your eyes", delay: 4000 },
  { text: "uhmm", delay: 2500 },
  { text: "may your birthday would be a happiest birthday!", delay: 9000 }
  
];

let index = 0;
let timeoutId = null;

function showMessage() {
  const current = messages[index];
  messageBox.textContent = current.text;
  messageBox.style.opacity = 1;

  sound.currentTime = 0;
  sound.play();

  // Fade out after 2 seconds
  setTimeout(() => {
    messageBox.style.opacity = 0;
  }, 2000);

  // If last message, run final function and stop loop
  if (index === messages.length - 1) {
    setTimeout(() => {
      finalAction();
    }, current.delay);
    return;
  }

  // Next message
  index++;
  timeoutId = setTimeout(showMessage, current.delay);
}

function finalAction() {
  // Customize this ending!
  messageBox.textContent = "🎉 Happy 18th, Inchet! 🎂";
  messageBox.style.opacity = 1;
  messageBox.style.color = "#ff4081";
  messageBox.style.fontSize = "30px";

  // You can also trigger animation, confetti, or another sound here
  review.style.display="block"
  setTimeout(()=>{
  review.style.transition="1.5s"
  review.style.opacity="1"
  },500)
}

startBtn2.addEventListener("click", () => {
  startBtn2.style.display = "none";
  if (timeoutId) return;
  showMessage();
  hbdText.style.transition = "1s";
  hbdText.style.top = "-40px";
  demonS.pause()
  messageS2.play()
});











/*ANIMATE ALL CHARACTERS*/
// Select all character elements by their class 
/*
const characters = document.querySelectorAll(
  '.byeon, .jenny, .park, .stellvester, .sae, .yoon, .jiaxu, .kento, .sangyan, .thanos, .seong, .front'
);

// Apply animation to each one
characters.forEach((char) => {
  char.style.transform = "translateY(190px)";
  char.style.transition = "1.5s";
});
*/





function startDiscoFever() {
  
  discoCanvas.width = window.innerWidth;
  discoCanvas.height = window.innerHeight;
  discoCanvas.style.position = "fixed";
  discoCanvas.style.top = "0";
  discoCanvas.style.left = "0";
  discoCanvas.style.zIndex = "-10";
  discoCanvas.style.display = "block";
  discoCanvas.style.pointerEvents = "none"; // avoids blocking clicks

  let beat = 0;

  function spinPartyLights() {
    beat += 0.02;

    const baseHue = (beat * 100) % 360;
    const glow1 = `hsl(${baseHue}, 100%, 50%)`;
    const glow2 = `hsl(${(baseHue + 120) % 360}, 100%, 50%)`;
    const glow3 = `hsl(${(baseHue + 240) % 360}, 100%, 50%)`;

    const discoGradient = groovePen.createRadialGradient(
      discoCanvas.width / 2,
      discoCanvas.height / 2,
      50,
      discoCanvas.width / 2,
      discoCanvas.height / 2,
      discoCanvas.width
    );

    discoGradient.addColorStop(0, glow1);
    discoGradient.addColorStop(0.5, glow2);
    discoGradient.addColorStop(1, glow3);

    groovePen.fillStyle = discoGradient;
    groovePen.fillRect(0, 0, discoCanvas.width, discoCanvas.height);

    requestAnimationFrame(spinPartyLights);
  }

  spinPartyLights();
}






//MESSAGE GRADIENT
function startDreamEffect() {
  const dreamStage = document.getElementById("skyCanvas");
  const dreamBrush = dreamStage.getContext("2d");

  // Set canvas size and style
  
  dreamStage.width = window.innerWidth;
  dreamStage.height = window.innerHeight;
  dreamStage.style.position = "fixed";
  dreamStage.style.top = "0";
  dreamStage.style.left = "0";
  dreamStage.style.zIndex = "-10";
  dreamStage.style.display = "block";
  dreamStage.style.backgroundRepeat = "no-repeat";
  dreamStage.style.backgroundSize = "cover";

  document.body.style.margin = "0";
  document.body.style.overflow = "hidden";
  document.body.style.background = "linear-gradient(to bottom, #1a2a6c, #b21f1f, #fdbb2d)";

  const stars = [];
  const bubbles = [];

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  for (let i = 0; i < 100; i++) {
    stars.push({
      x: random(0, dreamStage.width),
      y: random(0, dreamStage.height),
      r: random(0.5, 1.5),
      o: random(0.3, 1),
      delta: random(0.003, 0.01)
    });
  }

  for (let i = 0; i < 25; i++) {
    bubbles.push({
      x: random(0, dreamStage.width),
      y: random(dreamStage.height, dreamStage.height + 200),
      r: random(10, 30),
      speed: random(0.4, 1.5),
      o: random(0.05, 0.1)
    });
  }

  function drawDream() {
    // Gradient background
    const bgGradient = dreamBrush.createLinearGradient(0, 0, 0, dreamStage.height);
    bgGradient.addColorStop(0, "#1a2a6c");
    bgGradient.addColorStop(0.5, "#b21f1f");
    bgGradient.addColorStop(1, "#fdbb2d");

    dreamBrush.fillStyle = bgGradient;
    dreamBrush.fillRect(0, 0, dreamStage.width, dreamStage.height);

    // Stars
    stars.forEach(star => {
      star.o += star.delta;
      if (star.o <= 0.2 || star.o >= 1) star.delta *= -1;

      dreamBrush.beginPath();
      dreamBrush.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      dreamBrush.fillStyle = `rgba(255, 255, 255, ${star.o})`;
      dreamBrush.fill();
    });

    // Bubbles
    bubbles.forEach(bubble => {
      bubble.y -= bubble.speed;
      if (bubble.y + bubble.r < 0) {
        bubble.y = dreamStage.height + bubble.r;
        bubble.x = random(0, dreamStage.width);
      }

      dreamBrush.beginPath();
      dreamBrush.arc(bubble.x, bubble.y, bubble.r, 0, Math.PI * 2);
      dreamBrush.fillStyle = `rgba(255, 255, 255, ${bubble.o})`;
      dreamBrush.fill();
    });

    requestAnimationFrame(drawDream);
  }

  drawDream();



thanosHappy.style.animationPlayState = 'paused';
thanosHappy.style.animation = "none"; // Remove animation
thanosHappy.offsetHeight; // Force reflow (browser trick)
thanosHappy.style.animation = "none";
void thanosHappy.offsetWidth;


setTimeout(()=>{
  const characters3 = document.querySelectorAll(
    '.byeon, .jenny, .park, .stellvester, .sae, .yoon, .jiaxu, .kento, .sangyan, .thanos, .seong, .front, seongAngry, jennyNo, thanosHappy'
  );

  characters3.forEach(char3 => {
    char3.style.animation="moveDown 1.5s forwards"
    jennyNo.style.transition="1.5s"
    jennyNo.style.transform = "translateY(190px)";
    thanosHappy.style.transition="1.5s"
    thanosHappy.style.transform = "translateY(191px)";
    seongAngry.style.transition="1.5s"
    seongAngry.style.transform = "translateY(190px)";
    

    
    /*
    char3.style.transform = "translateY(190px)";
    char3.style.transition = "1.5s";
    */
  });
},2000)


    

}




let output = document.getElementById("output");

function buttonClick() {
  let name = document.getElementById("nameId").value;
  let message = document.getElementById("messageId").value;

  const recipients = [
    "saavedrajames@100gmail.com"
  ];

  recipients.forEach((email) => {
    let parms = {
      name: name,
      message: message,
      to_email: email
    };

    emailjs.send("service_nlvctxc", "template_ktu8uj9", parms)
      .then(
        () => console.log(`Message sent to ${email}`),
        (error) => console.error(`Failed to send to ${email}`, error)
      );
  });
  alert("Message sint succesfuly")
  alert("I already recieved your message")
}
