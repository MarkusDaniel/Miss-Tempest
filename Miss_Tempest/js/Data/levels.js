let level = 1
let levels =
{
    1:
    {
        init: () => {
            parsedCollisions = collisions_Level_1.parse2D()
            collisionBlocks = parsedCollisions.ObjectCreation2D()
            player.collisionBlocks = collisionBlocks
            parsedPlatforms = platformcolls_Level_1.parse2D()
            platformBlocks = parsedPlatforms.ObjectCreation2D()
            player.platformBlocks = platformBlocks
            player.position.x = 96
            player.position.y = 160
            if (player.currentAnimation) player.currentAnimation.isActive = false

            background = new Sprite(
            {
                position: 
                {
                     x: 0,
                     y: 0,
                },
            imageSrc:'sprites/levels/Level_1.png',
            })
            doors =
            [
                new Sprite(
                {
                    position:
                    {
                        x:210,
                        y:445,
                    },
                    imageSrc: 'sprites/DoorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false,
                }),
            ]
            animterrains =
            [
                new Sprite(
                    {
                        position:
                        {
                            x:567,
                            y:192,
                        },
                        imageSrc: 'sprites/animatable level terrains/mouse blink.png',
                        frameRate: 16,
                        frameBuffer: 32,
                        loop: true,
                        autoplay: true,
                    }),

                new Sprite(
                {
                    position:
                    {
                        x:416,
                        y:448,
                    },
                    imageSrc: 'sprites/animatable level terrains/mouse blink.png',
                    frameRate: 16,
                    frameBuffer: 32,
                    loop: true,
                    autoplay: true,
                }),
                new Sprite(
                    {
                        position:
                        {
                            x:895,
                            y:82,
                        },
                        imageSrc: 'sprites/animatable level terrains/mouse blink.png',
                        frameRate: 16,
                        frameBuffer: 36,
                        loop: true,
                        autoplay: true,
                    }),
            ]
            gems = 
            [
                new Gem({position:{x:380, y:235,},}),
                new Gem({position:{x:530, y:235,},}),
                new Gem({position:{x:390, y:465,},}),
                new Gem({position:{x:692, y:325,},}),
            ]
            obstacles =
            [
                new Obstacle({position:{x:360, y:272}}),
                new Obstacle({position:{x:560, y:272}}),

            ]
            foreground_elements =
            [
                new Sprite({position:{x:495,y:416,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
                new Sprite({position:{x:355,y:416,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
                new Sprite({position:{x:635,y:416,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
            ]
            enemys =[new Enemy({position:{x:697, y:495}, originalPosition:{x:697, y:495},
                imageSrc: 'sprites/Enemies/Slime/Slime-move_Right.png',
                frameRate: 4,
                frameBuffer: 10,
                loop: true,
                animations:{
                    moveRight:{
                        frameRate: 4,
                        frameBuffer: 10,
                        loop: true,
                        imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                    },
                    moveLeft:{
                        frameRate: 4,
                        frameBuffer: 10,
                        loop: true,
                        imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                    },
                    hurtleft:{
                        frameRate: 2,
                        frameBuffer:2,
                        loop: false,
                        imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                    },
                    hurtright:{
                        frameRate: 2,
                        frameBuffer:2,
                        loop: false,
                        imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                    }

                },
                horizontalspeed:1, verticalspeed:0, distance:150}),
                new Enemy({position:{x:697, y:495}, originalPosition:{x:697, y:495},
                    imageSrc: 'sprites/Enemies/Slime/Slime-move_Left.png',
                    frameRate: 4,
                    frameBuffer: 10,
                    loop: true,
                    animations:{
                        moveRight:{
                            frameRate: 4,
                            frameBuffer: 10,
                            loop: true,
                            imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                        },
                        moveLeft:{
                            frameRate: 4,
                            frameBuffer: 10,
                            loop: true,
                            imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                        },
                        hurtleft:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                        },
                        hurtright:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                        }
    
                    },
                    horizontalspeed:-1, verticalspeed:0, distance:150}),
            ]
            bosses =[]
        
        }   
    },
    2:
    {
        init: () => {
            parsedCollisions = collisions_Level_2.parse2D()
            collisionBlocks = parsedCollisions.ObjectCreation2D()
            player.collisionBlocks = collisionBlocks
            parsedPlatforms = platformcolls_Level_2.parse2D()
            platformBlocks = parsedPlatforms.ObjectCreation2D()
            player.platformBlocks = platformBlocks
            player.position.x = 76
            player.position.y = 160
            if (player.currentAnimation) player.currentAnimation.isActive = false

            background = new Sprite(
            {
                position: 
                {
                     x: 0,
                     y: 0,
                },
            imageSrc:'sprites/levels/Level_2.png',
            })
            doors =
            [
                new Sprite(
                {
                    position:
                    {
                        x:350,
                        y:478,
                    },
                    imageSrc: 'sprites/DoorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false,
                })
            ]
            animterrains =
            [

            ]
            gems =
            [
                new Gem({position:{x:380, y:115,},}),
                new Gem({position:{x:280, y:115,},}),
                new Gem({position:{x:180, y:115,},}),
                new Gem({position:{x:480, y:115,},}),
                new Gem({position:{x:580, y:215,},}),
                new Gem({position:{x:670, y:495,},}),
                new Gem({position:{x:830, y:425,},}),
                new Gem({position:{x:180, y:495,},}),
                new Gem({position:{x:930, y:375,},}),
                        
            ]
            obstacles =
            [
                new Obstacle({position:{x:180, y:528},}),
                new Obstacle({position:{x:480, y:288},imageSrc:'sprites/Obstacles/Spike_UP.png'}),
                new Obstacle({position:{x:240, y:32},imageSrc:'sprites/Obstacles/Spike_UP.png'}),
            ]
            foreground_elements =
            [
                new Sprite({position:{x:695,y:448,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
                new Sprite({position:{x:295,y:448,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
            ]
            enemys =[
                new Enemy({position:{x:564, y:367}, originalPosition:{x:564, y:367},
                imageSrc: 'sprites/Enemies/Slime/Slime-move_Right.png',
                frameRate: 4,
                frameBuffer: 10,
                animations:{
                    moveRight:{
                        frameRate: 4,
                        frameBuffer: 10,
                        loop: true,
                        imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                    },
                    moveLeft:{
                        frameRate: 4,
                        frameBuffer: 10,
                        loop: true,
                        imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                    },
                    hurtleft:{
                        frameRate: 2,
                        frameBuffer:2,
                        loop: false,
                        imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                    },
                    hurtright:{
                        frameRate: 2,
                        frameBuffer:2,
                        loop: false,
                        imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                    }

                },
                horizontalspeed:1, verticalspeed:0, distance:120}),
                new Enemy({position:{x:680, y:527}, originalPosition:{x:680, y:527},
                    imageSrc: 'sprites/Enemies/Slime/Slime-move_Left.png',
                    frameRate: 4,
                    frameBuffer: 10,
                    animations:{
                        moveRight:{
                            frameRate: 4,
                            frameBuffer: 10,
                            loop: true,
                            imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                        },
                        moveLeft:{
                            frameRate: 4,
                            frameBuffer: 10,
                            loop: true,
                            imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                        },
                        hurtleft:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                        },
                        hurtright:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                        }
    
                    },
                    horizontalspeed:-1, verticalspeed:0, distance:130}),
            ]
            bosses =[]
        }   
    },
    3:
    {
        init: () => {
            parsedCollisions = collisions_Level_3.parse2D()
            collisionBlocks = parsedCollisions.ObjectCreation2D()
            player.collisionBlocks = collisionBlocks
            parsedPlatforms = platformcolls_Level_3.parse2D()
            platformBlocks = parsedPlatforms.ObjectCreation2D()
            player.platformBlocks = platformBlocks
            player.position.x = 76
            player.position.y = 544
            if (player.currentAnimation) player.currentAnimation.isActive = false

            background = new Sprite(
            {
                position: 
                {
                     x: 0,
                     y: 0,
                },
            imageSrc:'sprites/levels/Level_3.png',
            })
            doors =
            [
                new Sprite(
                {
                    position:
                    {
                        x:676,
                        y:478,
                    },
                    imageSrc: 'sprites/DoorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false,
                })
            ]
            animterrains =
            [

                new Sprite(
                    {
                        position:
                        {
                            x:888,
                            y:117,
                        },
                        imageSrc: 'sprites/animatable level terrains/mouse blink.png',
                        frameRate: 16,
                        frameBuffer: 32,
                        loop: true,
                        autoplay: true,
                    }),


            ]
            gems =
            [
                new Gem({position:{x:420, y:505,},}),
                new Gem({position:{x:320, y:505,},}),
                new Gem({position:{x:420, y:275,},}),
                new Gem({position:{x:320, y:315,},}),
                new Gem({position:{x:620, y:315,},}),
                new Gem({position:{x:320, y:115,},}),
                new Gem({position:{x:520, y:105,},}),
                new Gem({position:{x:100, y:225,},}),
                new Gem({position:{x:965, y:158,},}),

            ]
            obstacles =
            [
                new Obstacle({position:{x:965, y:528},}),
   
                new Obstacle({position:{x:400, y:256},imageSrc:'sprites/Obstacles/Spike_UP.png'}),
                new Obstacle({position:{x:880, y:64},imageSrc:'sprites/Obstacles/Spike_UP.png'}),
            ]
            foreground_elements =
            [
                new Sprite({position:{x:655,y:64,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
                new Sprite({position:{x:355,y:64,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
                new Sprite({position:{x:505,y:64,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
            ]
            enemys =[

                    new Enemy({position:{x:535, y:143}, originalPosition:{x:535, y:143},
                        imageSrc: 'sprites/Enemies/Slime/Slime-move_Right.png',
                        frameRate: 4,
                        frameBuffer: 10,
                        animations:{
                            moveRight:{
                                frameRate: 4,
                                frameBuffer: 10,
                                loop: true,
                                imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                            },
                            moveLeft:{
                                frameRate: 4,
                                frameBuffer: 10,
                                loop: true,
                                imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                            }
        
                        },
                        
                        horizontalspeed:1, verticalspeed:0, distance:245}),
                        new Enemy({position:{x:485, y:335}, originalPosition:{x:485, y:335},
                            imageSrc: 'sprites/Enemies/Slime/Slime-move_Left.png',
                            frameRate: 4,
                            frameBuffer: 10,
                            animations:{
                                moveRight:{
                                    frameRate: 4,
                                    frameBuffer: 10,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                                },
                                moveLeft:{
                                    frameRate: 4,
                                    frameBuffer: 10,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                                },
                                hurtleft:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                                },
                                hurtright:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                                }
            
                            },
                            
                            horizontalspeed:-1, verticalspeed:0, distance:195}),
                                  

                    new Enemy({position:{x:140, y:190}, originalPosition:{x:140, y:190},
                        health:2,
                        imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                        frameRate: 8,
                        frameBuffer: 8,
                        animations:{
                            moveUpRight:{
                                frameRate: 8,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            },
                            moveDownRight:{
                                frameRate: 5,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                            },
                            moveUpLeft:{
                                frameRate: 8,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                            },
                            moveDownLeft:{
                                frameRate: 5,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                            }

        
                        },
                        horizontalspeed:0, verticalspeed:-1, distance:150}),

                    
            ]
            bosses =[]
        }   
    },
    4:
    {
        init: () => {
            parsedCollisions = collisions_Level_4.parse2D()
            collisionBlocks = parsedCollisions.ObjectCreation2D()
            player.collisionBlocks = collisionBlocks
            parsedPlatforms = platformcolls_Level_4.parse2D()
            platformBlocks = parsedPlatforms.ObjectCreation2D()
            player.platformBlocks = platformBlocks
            player.position.x = 76
            player.position.y = 544
            if (player.currentAnimation) player.currentAnimation.isActive = false

            background = new Sprite(
            {
                position: 
                {
                     x: 0,
                     y: 0,
                },
            imageSrc:'sprites/levels/Level_4.png',
            })
            doors =
            [
                new Sprite(
                {
                    position:
                    {
                        x:880,
                        y:252,
                    },
                    imageSrc: 'sprites/DoorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false,
                })
            ]
            animterrains =
            []
            gems =
            [
                new Gem({position:{x:155, y:100,},}),
                new Gem({position:{x:40, y:250,},}),
                new Gem({position:{x:655, y:120,},}),
                new Gem({position:{x:810, y:100,},}),
                new Gem({position:{x:820, y:450,},}),
                new Gem({position:{x:940, y:470,},}),
                new Gem({position:{x:700, y:470,},}),
                new Gem({position:{x:700, y:420,},}),
                new Gem({position:{x:940, y:422,},})
            ]
            obstacles =
            [
                new Obstacle({position:{x:700, y:64},imageSrc:'sprites/Obstacles/Spike_UP.png'}),
                new Obstacle({position:{x:884, y:64},imageSrc:'sprites/Obstacles/Spike_UP.png'}),
            ]
            foreground_elements =
            [
                new Sprite({position:{x:730,y:416,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
                new Sprite({position:{x:870,y:416,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
            ]
            enemys =[
                new Enemy({position:{x:790, y:495}, originalPosition:{x:790, y:495},
                    imageSrc: 'sprites/Enemies/Slime/Slime-move_Left.png',
                    frameRate: 4,
                    frameBuffer: 10,
                    loop: true,
                    animations:{
                        moveRight:{
                            frameRate: 4,
                            frameBuffer: 10,
                            loop: true,
                            imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                        },
                        moveLeft:{
                            frameRate: 4,
                            frameBuffer: 10,
                            loop: true,
                            imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                        },
                        hurtleft:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                        },
                        hurtright:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                        }},
                    horizontalspeed:-1, verticalspeed:0, distance:170}),

                    new Enemy({position:{x:420, y:431}, originalPosition:{x:420, y:431},
                        imageSrc: 'sprites/Enemies/Slime/Slime-move_Right.png',
                        frameRate: 4,
                        frameBuffer: 10,
                        loop: true,
                        animations:{
                            moveRight:{
                                frameRate: 4,
                                frameBuffer: 10,
                                loop: true,
                                imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                            },
                            moveLeft:{
                                frameRate: 4,
                                frameBuffer: 10,
                                loop: true,
                                imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                            }},
                        horizontalspeed:1, verticalspeed:0, distance:133}),

                    new Enemy({position:{x:565, y:143}, originalPosition:{x:565, y:143},
                        imageSrc: 'sprites/Enemies/Slime/Slime-move_Right.png',
                        frameRate: 4,
                        frameBuffer: 10,
                        loop: true,
                        animations:{
                            moveRight:{
                                frameRate: 4,
                                frameBuffer: 10,
                                loop: true,
                                imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                            },
                            moveLeft:{
                                frameRate: 4,
                                frameBuffer: 10,
                                loop: true,
                                imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                            }},
                        horizontalspeed:1, verticalspeed:0, distance:120}),

                    new Enemy({position:{x:60, y:225}, originalPosition:{x:60, y:225},
                        health:2,
                        imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                        frameRate: 8,
                        frameBuffer: 8,
                        animations:{
                            moveUpRight:{
                                frameRate: 8,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            },
                            moveDownRight:{
                                frameRate: 5,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                            },
                            moveUpLeft:{
                                frameRate: 8,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                            },
                            moveDownLeft:{
                                frameRate: 5,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                            }},
                        horizontalspeed:0, verticalspeed:-1, distance:160}),

                    new Enemy({position:{x:730, y:172}, originalPosition:{x:730, y:172},
                        health:2,
                        imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                        frameRate: 8,
                        frameBuffer: 8,
                        animations:{
                            moveUpRight:{
                                frameRate: 8,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            },
                            moveDownRight:{
                                frameRate: 5,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                            },
                            moveUpLeft:{
                                frameRate: 8,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                            },
                            moveDownLeft:{
                                frameRate: 5,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                            }},
                        horizontalspeed:0, verticalspeed:-1, distance:110}),
            ]
            bosses =[]
        }   
    },
    5:
    {
        init: () => {
            parsedCollisions = collisions_Level_5.parse2D()
            collisionBlocks = parsedCollisions.ObjectCreation2D()
            player.collisionBlocks = collisionBlocks
            parsedPlatforms = platformcolls_Level_5.parse2D()
            platformBlocks = parsedPlatforms.ObjectCreation2D()
            player.platformBlocks = platformBlocks
            player.position.x = 880
            player.position.y = 164
            if (player.currentAnimation) player.currentAnimation.isActive = false

            background = new Sprite(
            {
                position: 
                {
                     x: 0,
                     y: 0,
                },
            imageSrc:'sprites/levels/Level_5.png',
            })
            doors =
            [
                new Sprite(
                {
                    position:
                    {
                        x:380,
                        y:60,
                    },
                    imageSrc: 'sprites/DoorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false,
                })
            ]
            animterrains =
            []
            gems =
            [
                new Gem({position:{x:155, y:100,},}),
                new Gem({position:{x:455, y:40,},}),
                new Gem({position:{x:755, y:200,},}),
                new Gem({position:{x:255, y:220,},}),
                new Gem({position:{x:410, y:400,},}),
                new Gem({position:{x:550, y:300,},}),
                new Gem({position:{x:580, y:440,},}),   
                new Gem({position:{x:700, y:420,},}),
                new Gem({position:{x:940, y:422,},})
            ]
            obstacles =
            [
                new Obstacle({position:{x:544, y:224},imageSrc:'sprites/Obstacles/Spike_UP.png'}),
                new Obstacle({position:{x:180, y:432},}),
            ]
            foreground_elements =
            [
                new Sprite({position:{x:730,y:416,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
                new Sprite({position:{x:870,y:416,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
            ]
            enemys =[
                new Enemy({position:{x:420, y:431}, originalPosition:{x:420, y:431},
                    imageSrc: 'sprites/Enemies/Slime/Slime-move_Right.png',
                    frameRate: 4,
                    frameBuffer: 10,
                    loop: true,
                    animations:{
                        moveRight:{
                            frameRate: 4,
                            frameBuffer: 10,
                            loop: true,
                            imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                        },
                        moveLeft:{
                            frameRate: 4,
                            frameBuffer: 10,
                            loop: true,
                            imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                        },
                        hurtleft:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                        },
                        hurtright:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                        }},
                    horizontalspeed:1, verticalspeed:0, distance:100}),

                new Enemy({position:{x:170, y:190}, originalPosition:{x:170, y:190},
                    health:2,
                    imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                    frameRate: 8,
                    frameBuffer: 8,
                    animations:{
                        moveUpRight:{
                            frameRate: 8,
                            frameBuffer: 8,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                        },
                        moveDownRight:{
                            frameRate: 5,
                            frameBuffer: 8,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                        },
                        moveUpLeft:{
                            frameRate: 8,
                            frameBuffer: 8,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                        },
                        moveDownLeft:{
                            frameRate: 5,
                            frameBuffer: 8,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                        },
                        hurtleft:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                        },
                        hurtright:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                        }},
                    horizontalspeed:0, verticalspeed:-1, distance:150}),

                    new Enemy({position:{x:280, y:272}, originalPosition:{x:280, y:272},
                        health:2,
                        imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                        frameRate: 8,
                        frameBuffer: 8,
                        animations:{
                            moveUpRight:{
                                frameRate: 8,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            },
                            moveDownRight:{
                                frameRate: 5,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                            },
                            moveUpLeft:{
                                frameRate: 8,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                            },
                            moveDownLeft:{
                                frameRate: 5,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                            }},
                        horizontalspeed:0, verticalspeed:1, distance:135}),

                    new Enemy({position:{x:600, y:350}, originalPosition:{x:600, y:350},
                        health:2,
                        imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                        frameRate: 8,
                        frameBuffer: 7,
                        animations:{
                            moveUpRight:{
                                frameRate: 8,
                                frameBuffer: 7,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            },
                            moveDownRight:{
                                frameRate: 5,
                                frameBuffer: 7,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                            },
                            moveUpLeft:{
                                frameRate: 8,
                                frameBuffer: 7,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                            },
                            moveDownLeft:{
                                frameRate: 5,
                                frameBuffer: 7,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                            }},
                        horizontalspeed:0, verticalspeed:1.5, distance:120}),
                    
                        new Enemy({position:{x:630, y:350}, originalPosition:{x:630, y:350},
                            health:2,
                            imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            frameRate: 8,
                            frameBuffer: 7,
                            animations:{
                                moveUpRight:{
                                    frameRate: 8,
                                    frameBuffer: 7,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                },
                                moveDownRight:{
                                    frameRate: 5,
                                    frameBuffer: 7,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                                },
                                moveUpLeft:{
                                    frameRate: 8,
                                    frameBuffer: 7,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                                },
                                moveDownLeft:{
                                    frameRate: 5,
                                    frameBuffer: 7,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                                },
                                hurtleft:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                                },
                                hurtright:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                                }},
                            horizontalspeed:0, verticalspeed:-1.5, distance:120}),
            ]
            bosses =[]
        }   
    },
    6:
    {
        init: () => {
            parsedCollisions = collisions_Level_6.parse2D()
            collisionBlocks = parsedCollisions.ObjectCreation2D()
            player.collisionBlocks = collisionBlocks
            parsedPlatforms = platformcolls_Level_6.parse2D()
            platformBlocks = parsedPlatforms.ObjectCreation2D()
            player.platformBlocks = platformBlocks
            player.position.x = 70
            player.position.y = 430
            if (player.currentAnimation) player.currentAnimation.isActive = false

            background = new Sprite(
            {
                position: 
                {
                     x: 0,
                     y: 0,
                },
            imageSrc:'sprites/levels/Level_6.png',
            })
            doors =
            [
                new Sprite(
                {
                    position:
                    {
                        x:839,
                        y:92,
                    },
                    imageSrc: 'sprites/DoorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false,
                })
            ]
            animterrains =
            [
            ]
            gems =
            [
                new Gem({position:{x:165, y:120,},}),
                new Gem({position:{x:665, y:380,},}),
                new Gem({position:{x:565, y:340,},}),
                new Gem({position:{x:465, y:380,},}),
                new Gem({position:{x:165, y:380,},}),
                new Gem({position:{x:305, y:320,},}),
                new Gem({position:{x:675, y:220,},}),
            ]
            obstacles =
            [
                new Obstacle({position:{x:634, y:64},imageSrc:'sprites/Obstacles/Spike_UP.png'}),
                new Obstacle({position:{x:700, y:400},}),
            ]
            foreground_elements =[]
            enemys =[
                new Enemy({position:{x:325, y:207}, originalPosition:{x:325, y:207},
                    imageSrc: 'sprites/Enemies/Slime/Slime-move_Right.png',
                    frameRate: 4,
                    frameBuffer: 10,
                    loop: true,
                    animations:{
                        moveRight:{
                            frameRate: 4,
                            frameBuffer: 10,
                            loop: true,
                            imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                        },
                        moveLeft:{
                            frameRate: 4,
                            frameBuffer: 10,
                            loop: true,
                            imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                        },
                        hurtleft:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                        },
                        hurtright:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                        }},
                    horizontalspeed:1, verticalspeed:0, distance:70}),

                    new Enemy({position:{x:600, y:399}, originalPosition:{x:600, y:399},
                        imageSrc: 'sprites/Enemies/Slime/Slime-move_Right.png',
                        frameRate: 4,
                        frameBuffer: 10,
                        loop: true,
                        animations:{
                            moveRight:{
                                frameRate: 4,
                                frameBuffer: 10,
                                loop: true,
                                imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                            },
                            moveLeft:{
                                frameRate: 4,
                                frameBuffer: 10,
                                loop: true,
                                imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                            }},
                        horizontalspeed:1, verticalspeed:0, distance:150}),

                new Enemy({position:{x:640, y:230}, originalPosition:{x:640, y:230},
                    health:2,
                    imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                    frameRate: 8,
                    frameBuffer: 8,
                    animations:{
                        moveUpRight:{
                            frameRate: 8,
                            frameBuffer: 8,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                        },
                        moveDownRight:{
                            frameRate: 5,
                            frameBuffer: 8,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                        },
                        moveUpLeft:{
                            frameRate: 8,
                            frameBuffer: 8,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                        },
                        moveDownLeft:{
                            frameRate: 5,
                            frameBuffer: 8,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                        },
                        hurtleft:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                        },
                        hurtright:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                        }},
                    horizontalspeed:0, verticalspeed:-1, distance:155}),

                    new Enemy({position:{x:460, y:230}, originalPosition:{x:460, y:230},
                        health:2,
                        imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                        frameRate: 8,
                        frameBuffer: 8,
                        animations:{
                            moveUpRight:{
                                frameRate: 8,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            },
                            moveDownRight:{
                                frameRate: 5,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                            },
                            moveUpLeft:{
                                frameRate: 8,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                            },
                            moveDownLeft:{
                                frameRate: 5,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                            }},
                        horizontalspeed:0, verticalspeed:1, distance:155}),

                        new Enemy({position:{x:580, y:180}, originalPosition:{x:580, y:180},
                            health:2,
                            imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            frameRate: 8,
                            frameBuffer: 7,
                            animations:{
                                moveUpRight:{
                                    frameRate: 8,
                                    frameBuffer: 7,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                },
                                moveDownRight:{
                                    frameRate: 5,
                                    frameBuffer: 7,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                                },
                                moveUpLeft:{
                                    frameRate: 8,
                                    frameBuffer: 7,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                                },
                                moveDownLeft:{
                                    frameRate: 5,
                                    frameBuffer: 7,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                                },
                                hurtleft:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                                },
                                hurtright:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                                }},
                            horizontalspeed:0, verticalspeed:-1.5, distance:115}),

                            new Enemy({position:{x:732, y:160}, originalPosition:{x:732, y:160},
                                health:2,
                                imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                frameRate: 8,
                                frameBuffer: 6,
                                animations:{
                                    moveUpRight:{
                                        frameRate: 8,
                                        frameBuffer: 6,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                    },
                                    moveDownRight:{
                                        frameRate: 5,
                                        frameBuffer: 6,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                                    },
                                    moveUpLeft:{
                                        frameRate: 8,
                                        frameBuffer: 6,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                                    },
                                    moveDownLeft:{
                                        frameRate: 5,
                                        frameBuffer: 6,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                                    },
                                    hurtleft:{
                                        frameRate: 2,
                                        frameBuffer:2,
                                        loop: false,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                                    },
                                    hurtright:{
                                        frameRate: 2,
                                        frameBuffer:2,
                                        loop: false,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                                    }},
                                horizontalspeed:0, verticalspeed:-2, distance:100}),

                    new Enemy({position:{x:225, y:230}, originalPosition:{x:225, y:230},
                        health:2,
                        imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                        frameRate: 8,
                        frameBuffer: 8,
                        animations:{
                            moveUpRight:{
                                frameRate: 8,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            },
                            moveDownRight:{
                                frameRate: 5,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                            },
                            moveUpLeft:{
                                frameRate: 8,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                            },
                            moveDownLeft:{
                                frameRate: 5,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                            }},
                        horizontalspeed:0, verticalspeed:1, distance:155}),

                        new Enemy({position:{x:120, y:230}, originalPosition:{x:120, y:230},
                            health:2,
                            imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            frameRate: 8,
                            frameBuffer: 8,
                            animations:{
                                moveUpRight:{
                                    frameRate: 8,
                                    frameBuffer: 8,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                },
                                moveDownRight:{
                                    frameRate: 5,
                                    frameBuffer: 8,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                                },
                                moveUpLeft:{
                                    frameRate: 8,
                                    frameBuffer: 8,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                                },
                                moveDownLeft:{
                                    frameRate: 5,
                                    frameBuffer: 8,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                                },
                                hurtleft:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                                },
                                hurtright:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                                }},
                            horizontalspeed:0, verticalspeed:-1, distance:155}),
            ]
            bosses =[]
        }   
    },
    7:
    {
        init: () => {
            parsedCollisions = collisions_Level_7.parse2D()
            collisionBlocks = parsedCollisions.ObjectCreation2D()
            player.collisionBlocks = collisionBlocks
            parsedPlatforms = platformcolls_Level_7.parse2D()
            platformBlocks = parsedPlatforms.ObjectCreation2D()
            player.platformBlocks = platformBlocks
            player.position.x = 870
            player.position.y = 92
            if (player.currentAnimation) player.currentAnimation.isActive = false

            background = new Sprite(
            {
                position: 
                {
                     x: 0,
                     y: 0,
                },
            imageSrc:'sprites/levels/Level_7.png',
            })
            doors =
            [
                new Sprite(
                {
                    position:
                    {
                        x:550,
                        y:92,
                    },
                    imageSrc: 'sprites/DoorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false,
                })
            ]
            animterrains =
            []
            gems =
            [
                new Gem({position:{x:160, y:330,},}),
                new Gem({position:{x:80, y:330,},}),
                new Gem({position:{x:120, y:410,},}),
                new Gem({position:{x:420, y:410,},}),
                new Gem({position:{x:800, y:380,},}),
                new Gem({position:{x:740, y:280,},}),
                new Gem({position:{x:800, y:180,},}),
                new Gem({position:{x:420, y:120,},}),
                new Gem({position:{x:460, y:220,},}),
            ]
            obstacles =
            [

            ]
            foreground_elements =
            [
                new Sprite({position:{x:530,y:352,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
                new Sprite({position:{x:670,y:352,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
                new Sprite({position:{x:230,y:352,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
                new Sprite({position:{x:370,y:352,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
            ]
            enemys =[
                new Enemy({position:{x:610, y:431}, originalPosition:{x:610, y:431},
                    imageSrc: 'sprites/Enemies/Slime/Slime-move_Right.png',
                    frameRate: 4,
                    frameBuffer: 10,
                    loop: true,
                    animations:{
                        moveRight:{
                            frameRate: 4,
                            frameBuffer: 10,
                            loop: true,
                            imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                        },
                        moveLeft:{
                            frameRate: 4,
                            frameBuffer: 10,
                            loop: true,
                            imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                        },
                        hurtleft:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                        },
                        hurtright:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                        }},
                    horizontalspeed:1, verticalspeed:0, distance:115}),

                    new Enemy({position:{x:300, y:431}, originalPosition:{x:300, y:431},
                        imageSrc: 'sprites/Enemies/Slime/Slime-move_Left.png',
                        frameRate: 4,
                        frameBuffer: 10,
                        loop: true,
                        animations:{
                            moveRight:{
                                frameRate: 4,
                                frameBuffer: 10,
                                loop: true,
                                imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                            },
                            moveLeft:{
                                frameRate: 4,
                                frameBuffer: 10,
                                loop: true,
                                imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                            }},
                        horizontalspeed:-1, verticalspeed:0, distance:115}),

                new Enemy({position:{x:445, y:230}, originalPosition:{x:445, y:230},
                    health:2,
                    imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                    frameRate: 8,
                    frameBuffer: 8,
                    animations:{
                        moveUpRight:{
                            frameRate: 8,
                            frameBuffer: 8,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                        },
                        moveDownRight:{
                            frameRate: 5,
                            frameBuffer: 8,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                        },
                        moveUpLeft:{
                            frameRate: 8,
                            frameBuffer: 8,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                        },
                        moveDownLeft:{
                            frameRate: 5,
                            frameBuffer: 8,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                        },
                        hurtleft:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                        },
                        hurtright:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                        }},
                    horizontalspeed:0, verticalspeed:-1, distance:165}),
                
                    new Enemy({position:{x:760, y:230}, originalPosition:{x:760, y:230},
                        health:2,
                        imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                        frameRate: 8,
                        frameBuffer: 8,
                        animations:{
                            moveUpRight:{
                                frameRate: 8,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            },
                            moveDownRight:{
                                frameRate: 5,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                            },
                            moveUpLeft:{
                                frameRate: 8,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                            },
                            moveDownLeft:{
                                frameRate: 5,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                            }},
                        horizontalspeed:0, verticalspeed:1, distance:165}),
                    
                        new Enemy({position:{x:415, y:240}, originalPosition:{x:415, y:240},
                            health:2,
                            imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            frameRate: 8,
                            frameBuffer: 4,
                            animations:{
                                moveUpRight:{
                                    frameRate: 8,
                                    frameBuffer: 4,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                },
                                moveDownRight:{
                                    frameRate: 5,
                                    frameBuffer: 4,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                                },
                                moveUpLeft:{
                                    frameRate: 8,
                                    frameBuffer: 4,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                                },
                                moveDownLeft:{
                                    frameRate: 5,
                                    frameBuffer: 4,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                                },
                                hurtleft:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                                },
                                hurtright:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                                }},
                            horizontalspeed:0, verticalspeed:-3, distance:70}),

                            new Enemy({position:{x:475, y:140}, originalPosition:{x:475, y:140},
                                health:2,
                                imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                frameRate: 8,
                                frameBuffer: 4,
                                animations:{
                                    moveUpRight:{
                                        frameRate: 8,
                                        frameBuffer: 4,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                    },
                                    moveDownRight:{
                                        frameRate: 5,
                                        frameBuffer: 4,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                                    },
                                    moveUpLeft:{
                                        frameRate: 8,
                                        frameBuffer: 4,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                                    },
                                    moveDownLeft:{
                                        frameRate: 5,
                                        frameBuffer: 4,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                                    },
                                    hurtleft:{
                                        frameRate: 2,
                                        frameBuffer:2,
                                        loop: false,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                                    },
                                    hurtright:{
                                        frameRate: 2,
                                        frameBuffer:2,
                                        loop: false,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                                    }},
                                horizontalspeed:0, verticalspeed:3, distance:80}),

                            new Enemy({position:{x:795, y:240}, originalPosition:{x:795, y:240},
                                health:2,
                                imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                frameRate: 8,
                                frameBuffer: 4,
                                animations:{
                                    moveUpRight:{
                                        frameRate: 8,
                                        frameBuffer: 4,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                    },
                                    moveDownRight:{
                                        frameRate: 5,
                                        frameBuffer: 4,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                                    },
                                    moveUpLeft:{
                                        frameRate: 8,
                                        frameBuffer: 4,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                                    },
                                    moveDownLeft:{
                                        frameRate: 5,
                                        frameBuffer: 4,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                                    },
                                    hurtleft:{
                                        frameRate: 2,
                                        frameBuffer:2,
                                        loop: false,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                                    },
                                    hurtright:{
                                        frameRate: 2,
                                        frameBuffer:2,
                                        loop: false,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                                    }},
                                horizontalspeed:0, verticalspeed:3, distance:70}),
            ]
            bosses =[]
        }   
    },
    8:
    {
        init: () => {
            parsedCollisions = collisions_Level_8.parse2D();
            collisionBlocks = parsedCollisions.ObjectCreation2D();
            player.collisionBlocks = collisionBlocks;
            parsedPlatforms = platformcolls_Level_8.parse2D()
            platformBlocks = parsedPlatforms.ObjectCreation2D()
            player.platformBlocks = platformBlocks
            player.position.x = 135;
            player.position.y = 500;
            if (player.currentAnimation) player.currentAnimation.isActive = false;

            background = new Sprite(
            {
                position: 
                {
                     x: 0,
                     y: 0,
                },
            imageSrc:'sprites/levels/Level_8.png',
            })
            doors =
            [      
                new Sprite(
                {
                    position:
                    {
                        x:890,
                        y:252,
                    },
                    imageSrc: 'sprites/DoorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false,
                })
            ]
            animterrains =
            []
            gems =
            [
                new Gem({position:{x:135, y:280,},}),
                new Gem({position:{x:265, y:200,},}),
                new Gem({position:{x:385, y:160,},}),
                new Gem({position:{x:455, y:160,},}),
                new Gem({position:{x:655, y:190,},}),
                new Gem({position:{x:905, y:380,},}),
                new Gem({position:{x:905, y:460,},}),
                new Gem({position:{x:505, y:460,},}),
                new Gem({position:{x:705, y:420,},}),
                new Gem({position:{x:605, y:320,},}),
            ]
            obstacles =
            [
                new Obstacle({position:{x:420, y:416},imageSrc:'sprites/Obstacles/Spike_UP.png'}),
                new Obstacle({position:{x:840, y:352},imageSrc:'sprites/Obstacles/Spike_UP.png'}),
                new Obstacle({position:{x:680, y:64},imageSrc:'sprites/Obstacles/Spike_UP.png'}),
                new Obstacle({position:{x:240, y:496},}),
                new Obstacle({position:{x:600, y:496},}),
                new Obstacle({position:{x:800, y:496},}),
            ]
            foreground_elements =
            [

            ]
            enemys =[
                new Enemy({position:{x:475, y:140}, originalPosition:{x:475, y:140},
                    health:2,
                    imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                    frameRate: 8,
                    frameBuffer: 4,
                    animations:{
                        moveUpRight:{
                            frameRate: 8,
                            frameBuffer: 4,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                        },
                        moveDownRight:{
                            frameRate: 5,
                            frameBuffer: 4,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                        },
                        moveUpLeft:{
                            frameRate: 8,
                            frameBuffer: 4,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                        },
                        moveDownLeft:{
                            frameRate: 5,
                            frameBuffer: 4,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                        },
                        hurtleft:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                        },
                        hurtright:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                        }},
                    horizontalspeed:0, verticalspeed:3, distance:80}),

                    new Enemy({position:{x:545, y:370}, originalPosition:{x:545, y:370},
                        health:2,
                        imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                        frameRate: 8,
                        frameBuffer: 4,
                        animations:{
                            moveUpRight:{
                                frameRate: 8,
                                frameBuffer: 4,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            },
                            moveDownRight:{
                                frameRate: 5,
                                frameBuffer: 4,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                            },
                            moveUpLeft:{
                                frameRate: 8,
                                frameBuffer: 4,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                            },
                            moveDownLeft:{
                                frameRate: 5,
                                frameBuffer: 4,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                            }},
                        horizontalspeed:0, verticalspeed:-3, distance:100}),

                    new Enemy({position:{x:800, y:180}, originalPosition:{x:800, y:180},
                        health:2,
                        imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                        frameRate: 8,
                        frameBuffer: 6,
                        animations:{
                            moveUpRight:{
                                frameRate: 8,
                                frameBuffer: 6,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            },
                            moveDownRight:{
                                frameRate: 5,
                                frameBuffer: 6,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                            },
                            moveUpLeft:{
                                frameRate: 8,
                                frameBuffer: 6,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                            },
                            moveDownLeft:{
                                frameRate: 5,
                                frameBuffer: 6,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                            }},
                        horizontalspeed:0, verticalspeed:-2, distance:120}),

                        new Enemy({position:{x:740, y:280}, originalPosition:{x:740, y:280},
                            health:2,
                            imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            frameRate: 8,
                            frameBuffer: 6,
                            animations:{
                                moveUpRight:{
                                    frameRate: 8,
                                    frameBuffer: 6,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                },
                                moveDownRight:{
                                    frameRate: 5,
                                    frameBuffer: 6,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                                },
                                moveUpLeft:{
                                    frameRate: 8,
                                    frameBuffer: 6,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                                },
                                moveDownLeft:{
                                    frameRate: 5,
                                    frameBuffer: 6,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                                },
                                hurtleft:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                                },
                                hurtright:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                                }},
                            horizontalspeed:0, verticalspeed:2, distance:120}),

                    new Enemy({position:{x:275, y:140}, originalPosition:{x:275, y:140},
                        health:2,
                        imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                        frameRate: 8,
                        frameBuffer: 4,
                        animations:{
                            moveUpRight:{
                                frameRate: 8,
                                frameBuffer: 4,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            },
                            moveDownRight:{
                                frameRate: 5,
                                frameBuffer: 4,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                            },
                            moveUpLeft:{
                                frameRate: 8,
                                frameBuffer: 4,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                            },
                            moveDownLeft:{
                                frameRate: 5,
                                frameBuffer: 4,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                            }},
                        horizontalspeed:0, verticalspeed:-3, distance:80}),

                        new Enemy({position:{x:175, y:240}, originalPosition:{x:175, y:240},
                            health:2,
                            imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            frameRate: 8,
                            frameBuffer: 8,
                            animations:{
                                moveUpRight:{
                                    frameRate: 8,
                                    frameBuffer: 8,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                },
                                moveDownRight:{
                                    frameRate: 5,
                                    frameBuffer: 8,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                                },
                                moveUpLeft:{
                                    frameRate: 8,
                                    frameBuffer: 8,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                                },
                                moveDownLeft:{
                                    frameRate: 5,
                                    frameBuffer: 8,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                                },
                                hurtleft:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                                },
                                hurtright:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                                }},
                            horizontalspeed:0, verticalspeed:1, distance:170}),

                            new Enemy({position:{x:630, y:270}, originalPosition:{x:630, y:270},
                                health:2,
                                imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                frameRate: 8,
                                frameBuffer: 8,
                                animations:{
                                    moveUpRight:{
                                        frameRate: 8,
                                        frameBuffer: 8,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                    },
                                    moveDownRight:{
                                        frameRate: 5,
                                        frameBuffer: 8,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                                    },
                                    moveUpLeft:{
                                        frameRate: 8,
                                        frameBuffer: 8,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                                    },
                                    moveDownLeft:{
                                        frameRate: 5,
                                        frameBuffer: 8,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                                    },
                                    hurtleft:{
                                        frameRate: 2,
                                        frameBuffer:2,
                                        loop: false,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                                    },
                                    hurtright:{
                                        frameRate: 2,
                                        frameBuffer:2,
                                        loop: false,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                                    }},
                                horizontalspeed:0, verticalspeed:-1, distance:170}),

                                new Enemy({position:{x:330, y:270}, originalPosition:{x:330, y:270},
                                    health:2,
                                    imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                    frameRate: 8,
                                    frameBuffer: 8,
                                    animations:{
                                        moveUpRight:{
                                            frameRate: 8,
                                            frameBuffer: 8,
                                            loop: true,
                                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                        },
                                        moveDownRight:{
                                            frameRate: 5,
                                            frameBuffer: 8,
                                            loop: true,
                                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                                        },
                                        moveUpLeft:{
                                            frameRate: 8,
                                            frameBuffer: 8,
                                            loop: true,
                                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                                        },
                                        moveDownLeft:{
                                            frameRate: 5,
                                            frameBuffer: 8,
                                            loop: true,
                                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                                        },
                                        hurtleft:{
                                            frameRate: 2,
                                            frameBuffer:2,
                                            loop: false,
                                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                                        },
                                        hurtright:{
                                            frameRate: 2,
                                            frameBuffer:2,
                                            loop: false,
                                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                                        }},
                                    horizontalspeed:0, verticalspeed:1, distance:200}),

                    new Enemy({position:{x:420, y:495}, originalPosition:{x:420, y:495},
                        imageSrc: 'sprites/Enemies/Slime/Slime-move_Left.png',
                        frameRate: 4,
                        frameBuffer: 10,
                        loop: true,
                        animations:{
                            moveRight:{
                                frameRate: 4,
                                frameBuffer: 10,
                                loop: true,
                                imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                            },
                            moveLeft:{
                                frameRate: 4,
                                frameBuffer: 10,
                                loop: true,
                                imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                            }},
                        horizontalspeed:-1, verticalspeed:0, distance:160}),

                        new Enemy({position:{x:420, y:495}, originalPosition:{x:420, y:495},
                            imageSrc: 'sprites/Enemies/Slime/Slime-move_Right.png',
                            frameRate: 4,
                            frameBuffer: 10,
                            loop: true,
                            animations:{
                                moveRight:{
                                    frameRate: 4,
                                    frameBuffer: 10,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                                },
                                moveLeft:{
                                    frameRate: 4,
                                    frameBuffer: 10,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                                },
                                hurtleft:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                                },
                                hurtright:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                                }},
                            horizontalspeed:1, verticalspeed:0, distance:160}),

                        new Enemy({position:{x:700, y:495}, originalPosition:{x:700, y:495},
                            imageSrc: 'sprites/Enemies/Slime/Slime-move_Right.png',
                            frameRate: 4,
                            frameBuffer: 5,
                            loop: true,
                            animations:{
                                moveRight:{
                                    frameRate: 4,
                                    frameBuffer: 5,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                                },
                                moveLeft:{
                                    frameRate: 4,
                                    frameBuffer: 5,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                                },
                                hurtleft:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                                },
                                hurtright:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                                }},
                            horizontalspeed:2, verticalspeed:0, distance:80}),
            ]
            bosses =[]
        }   
    },
    9:
    {
        init: () => {
            parsedCollisions = collisions_Level_9.parse2D();
            collisionBlocks = parsedCollisions.ObjectCreation2D();
            player.collisionBlocks = collisionBlocks;
            parsedPlatforms = platformcolls_Level_9.parse2D()
            platformBlocks = parsedPlatforms.ObjectCreation2D()
            player.platformBlocks = platformBlocks
            player.position.x = 75;
            player.position.y = 100;
            if (player.currentAnimation) player.currentAnimation.isActive = false;

            background = new Sprite(
            {
                position: 
                {
                     x: 0,
                     y: 0,
                },
            imageSrc:'sprites/levels/Level_9.png',
            })
            doors =
            [
                new Sprite(
                {
                    position:
                    {
                        x:340,
                        y:412,
                    },
                    imageSrc: 'sprites/DoorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false,
                })
            ]
            animterrains =
            [

                new Sprite(
                    {
                        position:
                        {
                            x:800,
                            y:382,
                        },
                        imageSrc: 'sprites/animatable level terrains/Bat_idle-Sheet.png',
                        frameRate: 32,
                        frameBuffer: 12,
                        loop: true,
                        autoplay: true,
                    }),

            ]
            gems =
            [
                new Gem({position:{x:135, y:280,},}),
                new Gem({position:{x:105, y:440,},}),
                new Gem({position:{x:255, y:400,},}),
                new Gem({position:{x:335, y:120,},}),
                new Gem({position:{x:535, y:80,},}),
                new Gem({position:{x:735, y:120,},}),
                new Gem({position:{x:905, y:100,},}),
                new Gem({position:{x:300, y:220,},}),
                new Gem({position:{x:500, y:250,},}),
                new Gem({position:{x:700, y:220,},}),
            ]
            obstacles =
            [
                new Obstacle({position:{x:840, y:64},imageSrc:'sprites/Obstacles/Spike_UP.png'}),
                new Obstacle({position:{x:900, y:272},}),
            ]
            foreground_elements =
            [
                new Sprite({position:{x:500,y:64,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
                new Sprite({position:{x:670,y:64,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
                new Sprite({position:{x:585,y:192,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
                new Sprite({position:{x:785,y:192,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
                new Sprite({position:{x:370,y:192,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
            ]
            enemys =[
                new Enemy({position:{x:640, y:143}, originalPosition:{x:640, y:143},
                    imageSrc: 'sprites/Enemies/Slime/Slime-move_Left.png',
                    frameRate: 4,
                    frameBuffer: 5,
                    loop: true,
                    animations:{
                        moveRight:{
                            frameRate: 4,
                            frameBuffer: 5,
                            loop: true,
                            imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                        },
                        moveLeft:{
                            frameRate: 4,
                            frameBuffer: 5,
                            loop: true,
                            imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                        },
                        hurtleft:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                        },
                        hurtright:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                        }},
                    horizontalspeed:-2, verticalspeed:0, distance:120}),

                new Enemy({position:{x:360, y:143}, originalPosition:{x:360, y:143},
                    imageSrc: 'sprites/Enemies/Slime/Slime-move_Right.png',
                    frameRate: 4,
                    frameBuffer: 5,
                    loop: true,
                    animations:{
                        moveRight:{
                            frameRate: 4,
                            frameBuffer: 5,
                            loop: true,
                            imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                        },
                        moveLeft:{
                            frameRate: 4,
                            frameBuffer: 5,
                            loop: true,
                            imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                        },
                        hurtleft:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                        },
                        hurtright:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                        }},
                    horizontalspeed:2, verticalspeed:0, distance:120}),

                    new Enemy({position:{x:740, y:271}, originalPosition:{x:740, y:271},
                        imageSrc: 'sprites/Enemies/Slime/Slime-move_Right.png',
                        frameRate: 4,
                        frameBuffer: 5,
                        loop: true,
                        animations:{
                            moveRight:{
                                frameRate: 4,
                                frameBuffer: 5,
                                loop: true,
                                imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                            },
                            moveLeft:{
                                frameRate: 4,
                                frameBuffer: 5,
                                loop: true,
                                imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                            }},
                        horizontalspeed:2, verticalspeed:0, distance:120}),

                    new Enemy({position:{x:280, y:271}, originalPosition:{x:280, y:271},
                        imageSrc: 'sprites/Enemies/Slime/Slime-move_Left.png',
                        frameRate: 4,
                        frameBuffer: 5,
                        loop: true,
                        animations:{
                            moveRight:{
                                frameRate: 4,
                                frameBuffer: 5,
                                loop: true,
                                imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                            },
                            moveLeft:{
                                frameRate: 4,
                                frameBuffer: 5,
                                loop: true,
                                imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                            }},
                        horizontalspeed:-2, verticalspeed:0, distance:120}),

                        new Enemy({position:{x:530, y:271}, originalPosition:{x:280, y:271},
                            imageSrc: 'sprites/Enemies/Slime/Slime-move_Left.png',
                            frameRate: 4,
                            frameBuffer: 10,
                            loop: true,
                            animations:{
                                moveRight:{
                                    frameRate: 4,
                                    frameBuffer: 10,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                                },
                                moveLeft:{
                                    frameRate: 4,
                                    frameBuffer: 10,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                                },
                                hurtleft:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                                },
                                hurtright:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                                }},
                            horizontalspeed:-1, verticalspeed:0, distance:120}),

                    new Enemy({position:{x:80, y:320}, originalPosition:{x:80, y:320},
                        health:2,
                        imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                        frameRate: 8,
                        frameBuffer: 8,
                        animations:{
                            moveUpRight:{
                                frameRate: 8,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            },
                            moveDownRight:{
                                frameRate: 5,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                            },
                            moveUpLeft:{
                                frameRate: 8,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                            },
                            moveDownLeft:{
                                frameRate: 5,
                                frameBuffer: 8,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                            }},
                        horizontalspeed:0, verticalspeed:2, distance:120}),
            ]
            bosses =[]
        }   
    },
    10:
    {
        init: () => {
            parsedCollisions = collisions_Level_10.parse2D();
            collisionBlocks = parsedCollisions.ObjectCreation2D();
            player.collisionBlocks = collisionBlocks;
            parsedPlatforms = platformcolls_Level_10.parse2D()
            platformBlocks = parsedPlatforms.ObjectCreation2D()
            player.platformBlocks = platformBlocks
            player.position.x = 75;
            player.position.y = 300;
            if (player.currentAnimation) player.currentAnimation.isActive = false;

            background = new Sprite(
            {
                position: 
                {
                     x: 0,
                     y: 0,
                },
            imageSrc:'sprites/levels/Level_10.png',
            })
            doors =
            [
                new Sprite(
                {
                    position:
                    {
                        x:855,
                        y:192,
                    },
                    imageSrc: 'sprites/DoorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false,
                })
            ]
            animterrains =
            [
                new Sprite(
                    {
                        position:
                        {
                            x:392,
                            y:202,
                        },
                        imageSrc: 'sprites/animatable level terrains/mouse blink.png',
                        frameRate: 16,
                        frameBuffer: 28,
                        loop: true,
                        autoplay: true,
                    }),

            ]
            gems =
            [
                new Gem({position:{x:435, y:280,},}),
                new Gem({position:{x:740, y:340,},}),
                new Gem({position:{x:645, y:180,},}),
                new Gem({position:{x:645, y:470,},}),
                new Gem({position:{x:745, y:410,},}),
                new Gem({position:{x:835, y:470,},}),
                new Gem({position:{x:935, y:350,},}),
                new Gem({position:{x:740, y:120,},}),
            ]
            obstacles =
            [
                new Obstacle({position:{x:560, y:64},imageSrc:'sprites/Obstacles/Spike_UP.png'}),
                new Obstacle({position:{x:964, y:192},imageSrc:'sprites/Obstacles/Spike_UP.png'}),
                new Obstacle({position:{x:487, y:464},}),
                
                new Obstacle({position:{x:600, y:496},}),
                new Obstacle({position:{x:680, y:496},}),
                new Obstacle({position:{x:800, y:496},}),
            ]
            foreground_elements = []
            enemys =[
                new Enemy({position:{x:635, y:120}, originalPosition:{x:635, y:120},
                    health:2,
                    imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                    frameRate: 8,
                    frameBuffer: 4,
                    animations:{
                        moveUpRight:{
                            frameRate: 8,
                            frameBuffer: 4,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                        },
                        moveDownRight:{
                            frameRate: 5,
                            frameBuffer: 4,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                        },
                        moveUpLeft:{
                            frameRate: 8,
                            frameBuffer: 4,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                        },
                        moveDownLeft:{
                            frameRate: 5,
                            frameBuffer: 4,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                        },
                        hurtleft:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                        },
                        hurtright:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                        }},
                    horizontalspeed:0, verticalspeed:3, distance:60}),

                    new Enemy({position:{x:505, y:320}, originalPosition:{x:505, y:320},
                        health:2,
                        imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                        frameRate: 8,
                        frameBuffer: 4,
                        animations:{
                            moveUpRight:{
                                frameRate: 8,
                                frameBuffer: 4,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            },
                            moveDownRight:{
                                frameRate: 5,
                                frameBuffer: 4,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                            },
                            moveUpLeft:{
                                frameRate: 8,
                                frameBuffer: 4,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                            },
                            moveDownLeft:{
                                frameRate: 5,
                                frameBuffer: 4,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                            }},
                        horizontalspeed:0, verticalspeed:-2, distance:120}),

                        new Enemy({position:{x:425, y:250}, originalPosition:{x:425, y:250},
                            health:2,
                            imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            frameRate: 8,
                            frameBuffer: 4,
                            animations:{
                                moveUpRight:{
                                    frameRate: 8,
                                    frameBuffer: 4,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                },
                                moveDownRight:{
                                    frameRate: 5,
                                    frameBuffer: 4,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                                },
                                moveUpLeft:{
                                    frameRate: 8,
                                    frameBuffer: 4,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                                },
                                moveDownLeft:{
                                    frameRate: 5,
                                    frameBuffer: 4,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                                },
                                hurtleft:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                                },
                                hurtright:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                                }},
                            horizontalspeed:0, verticalspeed:2, distance:120}),

                            new Enemy({position:{x:925, y:270}, originalPosition:{x:925, y:270},
                                health:2,
                                imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                frameRate: 8,
                                frameBuffer: 4,
                                animations:{
                                    moveUpRight:{
                                        frameRate: 8,
                                        frameBuffer: 4,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                    },
                                    moveDownRight:{
                                        frameRate: 5,
                                        frameBuffer: 4,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                                    },
                                    moveUpLeft:{
                                        frameRate: 8,
                                        frameBuffer: 4,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                                    },
                                    moveDownLeft:{
                                        frameRate: 5,
                                        frameBuffer: 4,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                                    },
                                    hurtleft:{
                                        frameRate: 2,
                                        frameBuffer:2,
                                        loop: false,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                                    },
                                    hurtright:{
                                        frameRate: 2,
                                        frameBuffer:2,
                                        loop: false,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                                    }},
                                horizontalspeed:0, verticalspeed:-2, distance:110}),
    

                            new Enemy({position:{x:795, y:160}, originalPosition:{x:785, y:160},
                                health:2,
                                imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                frameRate: 8,
                                frameBuffer: 6,
                                animations:{
                                    moveUpRight:{
                                        frameRate: 8,
                                        frameBuffer: 6,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                    },
                                    moveDownRight:{
                                        frameRate: 5,
                                        frameBuffer: 6,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                                    },
                                    moveUpLeft:{
                                        frameRate: 8,
                                        frameBuffer: 6,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                                    },
                                    moveDownLeft:{
                                        frameRate: 5,
                                        frameBuffer: 6,
                                        loop: true,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                                    },
                                    hurtleft:{
                                        frameRate: 2,
                                        frameBuffer:2,
                                        loop: false,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                                    },
                                    hurtright:{
                                        frameRate: 2,
                                        frameBuffer:2,
                                        loop: false,
                                        imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                                    }},
                                horizontalspeed:0, verticalspeed:2, distance:100}),

                                new Enemy({position:{x:820, y:370}, originalPosition:{x:820, y:370},
                                    health:2,
                                    imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                    frameRate: 8,
                                    frameBuffer: 6,
                                    animations:{
                                        moveUpRight:{
                                            frameRate: 8,
                                            frameBuffer: 6,
                                            loop: true,
                                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                        },
                                        moveDownRight:{
                                            frameRate: 5,
                                            frameBuffer: 6,
                                            loop: true,
                                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                                        },
                                        moveUpLeft:{
                                            frameRate: 8,
                                            frameBuffer: 6,
                                            loop: true,
                                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                                        },
                                        moveDownLeft:{
                                            frameRate: 5,
                                            frameBuffer: 6,
                                            loop: true,
                                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                                        },
                                        hurtleft:{
                                            frameRate: 2,
                                            frameBuffer:2,
                                            loop: false,
                                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                                        },
                                        hurtright:{
                                            frameRate: 2,
                                            frameBuffer:2,
                                            loop: false,
                                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                                        }},
                                    horizontalspeed:0, verticalspeed:-2, distance:100}),

                    new Enemy({position:{x:635, y:360}, originalPosition:{x:635, y:360},
                        health:2,
                        imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                        frameRate: 8,
                        frameBuffer: 6,
                        animations:{
                            moveUpRight:{
                                frameRate: 8,
                                frameBuffer: 6,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            },
                            moveDownRight:{
                                frameRate: 5,
                                frameBuffer: 6,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                            },
                            moveUpLeft:{
                                frameRate: 8,
                                frameBuffer: 6,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                            },
                            moveDownLeft:{
                                frameRate: 5,
                                frameBuffer: 6,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                            }},
                        horizontalspeed:0, verticalspeed:2, distance:120}),

                        new Enemy({position:{x:735, y:260}, originalPosition:{x:735, y:260},
                            health:2,
                            imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            frameRate: 8,
                            frameBuffer: 6,
                            animations:{
                                moveUpRight:{
                                    frameRate: 8,
                                    frameBuffer: 6,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                                },
                                moveDownRight:{
                                    frameRate: 5,
                                    frameBuffer: 6,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                                },
                                moveUpLeft:{
                                    frameRate: 8,
                                    frameBuffer: 6,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                                },
                                moveDownLeft:{
                                    frameRate: 5,
                                    frameBuffer: 6,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                                },
                                hurtleft:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                                },
                                hurtright:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                                }},
                            horizontalspeed:0, verticalspeed:2, distance:90}),


            ]
            bosses =[]
        }   
    },
    11:
    {
        init: () => {
            parsedCollisions = collisions_Level_11.parse2D();
            collisionBlocks = parsedCollisions.ObjectCreation2D();
            player.collisionBlocks = collisionBlocks;
            parsedPlatforms = platformcolls_Level_11.parse2D()
            platformBlocks = parsedPlatforms.ObjectCreation2D()
            player.platformBlocks = platformBlocks
            player.position.x = 75;
            player.position.y = 300;
            if (player.currentAnimation) player.currentAnimation.isActive = false;

            background = new Sprite(
            {
                position: 
                {
                     x: 0,
                     y: 0,
                },
            imageSrc:'sprites/levels/Level_11.png',
            })
            doors =
            [
                new Sprite(
                {
                    position:
                    {
                        x:855,
                        y:126,
                    },
                    imageSrc: 'sprites/DoorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false,
                })
            ]
            animterrains =
            [
            ]
            gems =
            [
                new Gem({position:{x:235, y:140,},}),
                new Gem({position:{x:132, y:200,},}),
                new Gem({position:{x:645, y:200,},}),
                new Gem({position:{x:645, y:470,},}),
                new Gem({position:{x:745, y:410,},}),
                new Gem({position:{x:835, y:470,},}),
                new Gem({position:{x:455, y:140,},}),
                new Gem({position:{x:555, y:140,},}),
                new Gem({position:{x:740, y:120,},}),
            ]
            obstacles =
            [
                new Obstacle({position:{x:200, y:96},imageSrc:'sprites/Obstacles/Spike_UP.png'}),
                new Obstacle({position:{x:240, y:228},imageSrc:'sprites/Obstacles/Spike_UP.png'}),
                new Obstacle({position:{x:870, y:382},imageSrc:'sprites/Obstacles/Spike_UP.png'}),
                new Obstacle({position:{x:600, y:496},}),
                new Obstacle({position:{x:680, y:496},}),
                new Obstacle({position:{x:800, y:496},}),
            ]
            foreground_elements =
            [
                new Sprite({position:{x:400,y:96,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
                new Sprite({position:{x:500,y:96,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
                new Sprite({position:{x:600,y:96,},imageSrc: 'sprites/Fore_ground_elements/Column.png',}),
            ]
            enemys =[
                
                new Enemy({position:{x:665, y:260}, originalPosition:{x:665, y:260},
                    health:2,
                    imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                    frameRate: 8,
                    frameBuffer: 6,
                    animations:{
                        moveUpRight:{
                            frameRate: 8,
                            frameBuffer: 6,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                        },
                        moveDownRight:{
                            frameRate: 5,
                            frameBuffer: 6,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                        },
                        moveUpLeft:{
                            frameRate: 8,
                            frameBuffer: 6,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                        },
                        moveDownLeft:{
                            frameRate: 5,
                            frameBuffer: 6,
                            loop: true,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                        },
                        hurtleft:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                        },
                        hurtright:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                        }},
                    horizontalspeed:0, verticalspeed:2, distance:150}),

                    new Enemy({position:{x:345, y:220}, originalPosition:{x:345, y:220},
                        health:2,
                        imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                        frameRate: 8,
                        frameBuffer: 6,
                        animations:{
                            moveUpRight:{
                                frameRate: 8,
                                frameBuffer: 6,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                            },
                            moveDownRight:{
                                frameRate: 5,
                                frameBuffer: 6,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                            },
                            moveUpLeft:{
                                frameRate: 8,
                                frameBuffer: 6,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                            },
                            moveDownLeft:{
                                frameRate: 5,
                                frameBuffer: 6,
                                loop: true,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                            }},
                        horizontalspeed:0, verticalspeed:-2, distance:120}),

                    new Enemy({position:{x:780, y:495}, originalPosition:{x:780, y:495},
                        imageSrc: 'sprites/Enemies/Slime/Slime-move_Right.png',
                        frameRate: 4,
                        frameBuffer: 5,
                        loop: true,
                        animations:{
                            moveRight:{
                                frameRate: 4,
                                frameBuffer: 5,
                                loop: true,
                                imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                            },
                            moveLeft:{
                                frameRate: 4,
                                frameBuffer: 5,
                                loop: true,
                                imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                            }},
                        horizontalspeed:2, verticalspeed:0, distance:120}),

                    new Enemy({position:{x:600, y:495}, originalPosition:{x:600, y:495},
                        imageSrc: 'sprites/Enemies/Slime/Slime-move_Left.png',
                        frameRate: 4,
                        frameBuffer: 5,
                        loop: true,
                        animations:{
                            moveRight:{
                                frameRate: 4,
                                frameBuffer: 5,
                                loop: true,
                                imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                            },
                            moveLeft:{
                                frameRate: 4,
                                frameBuffer: 5,
                                loop: true,
                                imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                            },
                            hurtleft:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                            },
                            hurtright:{
                                frameRate: 2,
                                frameBuffer:2,
                                loop: false,
                                imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                            }},
                        horizontalspeed:-2, verticalspeed:0, distance:120}),

                        new Enemy({position:{x:500, y:175}, originalPosition:{x:500, y:175},
                            imageSrc: 'sprites/Enemies/Slime/Slime-move_Left.png',
                            frameRate: 4,
                            frameBuffer: 10,
                            loop: true,
                            animations:{
                                moveRight:{
                                    frameRate: 4,
                                    frameBuffer: 10,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/Slime/Slime-move_Right.png',
                                },
                                moveLeft:{
                                    frameRate: 4,
                                    frameBuffer: 10,
                                    loop: true,
                                    imageSrc:'sprites/Enemies/Slime/Slime-move_Left.png',
                                },
                                hurtleft:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Left.png',
                                },
                                hurtright:{
                                    frameRate: 2,
                                    frameBuffer:2,
                                    loop: false,
                                    imageSrc:'sprites/Enemies/Slime/Slime_Hurt_Right.png',
                                }},
                            horizontalspeed:-1, verticalspeed:0, distance:120}),
            ]
            bosses =[]
        }   
    },
    12:
    {
        init: () => {
            parsedCollisions = collisions_Level_12.parse2D();
            collisionBlocks = parsedCollisions.ObjectCreation2D();
            player.collisionBlocks = collisionBlocks;
            parsedPlatforms = platformcolls_Level_12.parse2D()
            platformBlocks = parsedPlatforms.ObjectCreation2D()
            player.platformBlocks = platformBlocks
            player.position.x = 100;
            player.position.y = 210;
            
            if (player.currentAnimation) player.currentAnimation.isActive = false;

            background = new Sprite(
            {
                position: 
                {
                     x: 0,
                     y: 0,
                },
            imageSrc:'sprites/levels/Level_12.png',
            })
            doors =
            [
                new Sprite(
                {
                    position:
                    {
                        x:900,
                        y:126,
                    },
                    imageSrc: 'sprites/DoorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false,
                })
            ]
            animterrains =
            [
            ]
            gems =
            [
                new Gem({position:{x:332, y:200,},}),
                new Gem({position:{x:645, y:200,},}),
                new Gem({position:{x:505, y:370,},}),
                new Gem({position:{x:745, y:310,},}),
                new Gem({position:{x:835, y:370,},}),
                new Gem({position:{x:455, y:140,},}),
                new Gem({position:{x:585, y:100,},}),
                new Gem({position:{x:740, y:120,},}),
            ]
            obstacles =
            [
                new Obstacle({position:{x:256, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:288, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:320, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:352, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:384, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:416, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:448, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:480, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:512, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:512, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:544, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:576, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:608, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:640, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:672, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:704, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:736, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:768, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:800, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:832, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:864, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:896, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
                new Obstacle({position:{x:928, y:512},imageSrc:'sprites/Obstacles/LavaTop.png',frameRate:6,frameBuffer:6, loop: true, autoplay: true}),
            ]
            foreground_elements =
            [
            ]
            enemys =[     
            ]
            bosses =[
                new Boss
                ({position:{x:450, y:200},
                    imageSrc: 'sprites/Enemies/Boss_OctoEye/Boss_MedusEye_Fly_Left.png',
                    frameRate: 10,
                    frameBuffer: 8,
                    animations:{
                        moveLeft:{
                            frameRate: 10,
                            frameBuffer: 8,
                            loop: true,
                            imageSrc:'sprites/Enemies/Boss_OctoEye/Boss_MedusEye_Fly_Left.png',
                        },
                        moveRight:{
                            frameRate: 10,
                            frameBuffer: 8,
                            loop: true,
                            imageSrc:'sprites/Enemies/Boss_OctoEye/Boss_MedusEye_Fly_Right.png',
                        },
                        hurtleft:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/Boss_OctoEye/Boss_MedusEye_Hurt_Left.png',
                        },
                        hurtright:{
                            frameRate: 2,
                            frameBuffer:2,
                            loop: false,
                            imageSrc:'sprites/Enemies/Boss_OctoEye/Boss_MedusEye_Hurt_Right.png',
                        }
                    },
                        
                }),
                
            ]
        }   
    },

}