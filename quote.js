let quote = document.querySelector('.press2')
console.log(quote.innerText)

let author = document.querySelector('.press')
console.log(author.innerText)




const quotess = [ {person: `bolaji`, 
					quotes: `"I am the one who said that"`},

					{person: `Serena Williams`, 
					quotes: `“You have to believe in yourself when no one else does.”`},

					{person: `Carol Bunnet`, 
					quotes: `"When you have a dream, you’ve got to grab it and never let go."`},

					{person: `Steve Job`, 
					quotes: `"The most important thing is to enjoy your life—to be happy—it’s all that matters"`},

					{person: `Mother Theresa`, 
					quotes: `"Spread love everywhere you go. Let no one ever come without leaving happier."`},

					{person: `Oscar Wide`, 
					quotes: `"Be yourself; everyone else is already taken."`},


					{person: `OPrah Winfrey`, 
					quotes: `"The biggest adventure you can take is to live the life of your dreams."`},

					{person: `Franklin R`, 
					quotes: `"The only thing we have to fear is fear itself."`},


					{person: `Micheal Jordan`, 
					quotes: `"I can accept failure, everyone fails at something. But I can’t accept not trying.."`},


					{person: `Tont Rubbins`, 
					quotes: `"You’ve got to be in it to win it.."`},


{person: `Confiscus`, 
					quotes: `"It does not matter how slowly you go, as long as you do not stop"`},


{person: `Dolly Patron`, 
					quotes: `"Find out who you are and do it on purpose.."`},


{person: `Mihelle Obama`, 
					quotes: `"For me, becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn’t end.."`},


{person: `Sofa Vergara`, 
					quotes: `"Confident people have a way of carrying themselves that makes others attracted to them"`},


{person: `Leornado`, 
					quotes: `"If you can do what you do best and be happy, you are further along in life than most people.."`},


{person: `Kesha R`, 
					quotes: `"You can be everything. You can be the infinite amount of things that people are.."`},


{person: `Deepak Chopra`, 
					quotes: `"Always go with your passions. Never ask yourself if it’s realistic or not.”"`},


{person: `Norman Pearl`, 
					quotes: `"When you change your thoughts, remember to also change your world."`},


{person: `Stephane Perkins`, 
					quotes: `"The more you know who you are, and what you want, the less you let things upset you.."`},


{person: `Elliot`, 
					quotes: `"By being yourself, you put something wonderful in the world that was not there before."`},

{person: `Elearno Rosolvert`, 
					quotes: `"Do one thing every day that scares you."`},

					{person: `George ELliot`, 
					quotes: `"It is never too late to be what you might have been.."`},

					{person: `Ellen `, 
					quotes: `"Find out who you are and be that person. That’s what your soul was put on this earth to be. Find the truth, live that truth, and everything else will come."`},

					{person: `Viktor Frank`, 
					quotes: `"When we are no longer able to change a situation, we are challenged to change ourselves"`},

					{person: `Napoleon`, 
					quotes: `"If you cannot do great things, do small things in a great way"`},

					{person: `Og Mandino`, 
					quotes: `"Always do your best. What you plant now, you will harvest later.."`},

					{person: `Oprah Winfrey`, 
					quotes: `"Failure is a great teacher and, if you are open to it, every mistake has a lesson to offer."`},

					{person: `Dolly Parton`, 
					quotes: `"If you don’t like the road you’re walking, start paving another one."`},

					{person: `Will  Rogerst`, 
					quotes: `"Don’t let yesterday take up too much of today.."`},

					{person: `Narilyn`, 
					quotes: `Keep smiling, because life is a beautiful thing and there’s so much to smile about.."`},

					{person: `George Lucas`, 
					quotes: `"Be persistent and never give up hope"`},

					{person: `George Lucas`, 
					quotes: `"When we strive to become better than we are, everything around us becomes better too"`},

					{person: `Paulo Cello`, 
					quotes: `"Be persistent and never give up hope"`},



					{person: `ChARLES KETTERING`, 
					quotes: `"Believe and act as if it were impossible to fail"`},



					{person: `Zendaya`, 
					quotes: `"There are so many great things in life; why dwell on negativity?"`},

					


					{person: `John`, 
					quotes: `"Happiness often sneaks in through a door you didn’t know you left open"`},



					{person: `Margaret`, 
					quotes: `"Always remember that you are absolutely unique. Just like everyone else"`},



					{person: `Wilt whitman`, 
					quotes: `"Keep your face towards the sunshine and shadows will fall behind you"`},



					{person: `Duke`, 
					quotes: `"A problem is a chance for you to do your best."`},



					{person: `Mandy Hale`, 
					quotes: `"You don’t always need a plan. Sometimes you just need to breathe, trust, let go and see what happens."`},



					{person: `Audrey Heuphbom`, 
					quotes: `"Nothing is impossible. The word itself says ‘I’m possible!"`},



					{person: `Annete`, 
					quotes: `"Life does not have to be perfect to be wonderful."`},



					{person: `Aristotle`, 
					quotes: `"It is during our darkest moments that we must focus to see the light"`},


					{person: `Robert Frost`, 
					quotes: `"The best way out is through"`},



					{person: `John Rockfeller`, 
					quotes: `"Don’t be afraid to give up the good to go for the great."`},



					{person: `Henry Ford`, 
					quotes: `"Whether you think you can or you can’t, you’re right."`},



					{person: `Haaile Bailey`, 
					quotes: `"Don’t take yourself too seriously. Know when to laugh at yourself, and find a way to laugh at obstacles that inevitably present themselves."`},



					{person: `Bob marley`, 
					quotes: `"Love the life you live. Live the life you love."`},



					{person: `Wilt whitman`, 
					quotes: `"Keep your face towards the sunshine and shadows will fall behind you"`},



					{person: `Ralph`, 
					quotes: `"The only person you are destined to become is the person you decide to be"`},



					{person: `AWa Duvenny`, 
					quotes: `"I’m not going to continue knocking that old door that doesn’t open for me. I’m going to create my own door and walk through that.”"`},



					{person: `Dwayne `, 
					quotes: `"If you change the way you look at things, the things you look at change"`},



					{person: `Maya Angeolu`, 
					quotes: `"You will face many defeats in life, but never let yourself be defeated."`},



					{person: `Eleanor Rosolvert`, 
					quotes: `"The future belongs to those who believe in the beauty of their dreams."`},



					{person: `Robert Fraults`, 
					quotes: `"Take the time to enjoy the little things, for one day you may look back and realize they were the big things"`},



					{person: `Nico N`, 
					quotes: `"Take the time to enjoy the little things, for one day you may look back and realize they were the big thingse"`},



					{person: `Malcom X `, 
					quotes: `"Life has got those twists and turns. You’ve got to hold on tight and off you go."`},



					{person: `Leonard`, 
					quotes: `"The future belongs to those who prepare for it today."`},



					{person: `Alice walker`, 
					quotes: `"Don’t wait around for other people to be happy for you. Any happiness you get you’ve got to make yourself"`},


					{person: `Wayne Gretzy`, 
					quotes: `"You miss 100% of the shots you don’t take"`},


					{person: `James Barryr`, 
					quotes: `"You miss 100% of the shots you don’t take"`},

					{person: `Joseph Campbell`, 
					quotes: `"We must let go of the life we have planned, so as to accept the one that is waiting for us.`},

					{person: `WInston Churchhill`, 
					quotes: `"We make a living by what we get, but we make a life by what we give"`},

					{person: `Nikki`, 
					quotes: `"Mistakes are a fact of life. It is the response to the error that counts"`},

					{person: `Lao Otzu`, 
					quotes: `"When I let go of what I am, I become what I might be"`},

					{person: `Max Chevin`, 
					quotes: `Ignore your mistakes. The number one thing to worry about is: Am I doing what I’m good at?"`},

					{person: `Lez walker`, 
					quotes: `"If you are not willing to risk the usual, you will have to settle for the ordinary"`},

					{person: `A`, 
					quotes: `"“Life has no limitations, except the ones you make."`},

					{person: `Abraham Lincoln`, 
					quotes: `"In the end, it’s not the years in your life that count. It’s life in your years."`},

					{person: `Maya Angeolu`, 
					quotes: `"You may not control all the events that happen to you, but you can decide not to be reduced by them"` },


					{person: `Ralph`, 
					quotes: `"“Life is a succession of lessons which must be lived to be understood"`},

					{person: `Gloria`, 
					quotes: `"Dreaming, after all, is a form of planning."`},


					{person: `Earl`, 
					quotes: `"We become what we think about most of the time."`},


					{person: `Drew`, 
					quotes: `"Life is very interesting…in the end, some of your greatest pains become your greatest strengths.`},

					{person: `Helen`, 
					quotes: `"Life is a daring adventure or it is nothing at all.`},
				

					{person: `Charles diken`, 
					quotes: `"Don’t wait around for other people to be happy for you. Any happiness you get you’ve got to make yourself"`},



					{person: `John`, 
					quotes: `"Success is falling nine times and getting up 10f"`},



					{person: `Dale`, 
					quotes: `"“Develop success from failures. Discouragement and failures are two of the surest stepping stones to success"`},



					{person: `Aurthur`, 
					quotes: `"Start where you are. Use what you have. Do what you can."`},



					{person: `Graham Bell`, 
					quotes: `"Before anything else, preparation is the key to success."`},



					{person: `Bill`, 
					quotes: `"Ambition is the path to success. Persistence is the vehicle you arrive in"`},



					{person: `Lady Gaga`, 
					quotes: `"Don’t wait around for other people to be happy for you. Any happiness you get you’ve got to make yourself"`},


					{person: `Jennifer Austin`, 
					quotes: `"There are no regrets in life. Just lessons"`},

					{person: `Henry Ford`, 
					quotes: `"Coming together is a beginning; keeping together is progress; working together is success.f"`},

					{person: `Albert EInstein`, 
					quotes: `"A person who never made a mistake never tried anything new."`},

					{person: `Seth Godin`, 
					quotes: `"How dare you settle for less when the world made it so easy for you to be remarkable?"`},

					{person: `Joshua Marine`, 
					quotes: `"Challenges are what make life interesting and overcoming them is what makes life meaningful."`},

					{person: `Alber Einstein`, 
					quotes: `"We cannot solve problems with the kind of thinking we employed when we came up with them.`},

					{person: `Jonah Hill`, 
					quotes: `"“It’s always better to shock people and change people’s expectations than to give them exactly what they think you can do"`},

					{person: `Charles diken`, 
					quotes: `"Don’t wait around for other people to be happy for you. Any happiness you get you’ve got to make yourself"`},

					{person: `paulo cello`, 
					quotes: `"And when you want something, all the universe conspires in helping you achieve it."`},

					{person: `Robert `, 
					quotes: `"Don’t judge each day by the harvest you reap but by the seeds that you plant"`},

					{person: `Hervan`, 
					quotes: `"It is better to fail in originality than to succeed in imitation.`},

					{person: `Drew`, 
					quotes: `"Don’t worry about failure, you only have to be right once."`},

					{person: `Vernonn`, 
					quotes: `"Experience is a hard teacher because she gives the test first, the lesson afterwards"`},

					{person: `Norman`, 
					quotes: `"Dream big and dare to fail."`},

					{person: `Abraham lincon`, 
					quotes: `"Be sure you put your feet in the right place, then stand firm"`},

					{person: `Kinsella`, 
					quotes: `"I’m not going to continue knocking on that old door that doesn’t open for me. I’m going to create my own door and walk through that."`},

					{person: `Vincemt Johhn`, 
					quotes: `"For the great doesn’t happen through impulse alone, and is a succession of little things that are brought together."`},

					{person: `Ralph`, 
					quotes: `"Life is a succession of lessons which must be lived to be understood."`},

					{person: `DAnny Boyle`, 
					quotes: `"It’s a good place when all you have is hope and not expectations"`},

		

]
const btn = document.querySelector('.next button').addEventListener('click',function(e){

		let random = Math.floor(Math.random()*quotess.length)

		 author.innerText = quotess[random].person;
		quote.innerText = quotess[random].quotes;
})