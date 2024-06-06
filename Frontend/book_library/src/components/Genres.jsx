import React from 'react'

import girlBook from "../assets/girlBook.jpg";
import fantasy from "../assets/fantasy.png";
import adventure from "../assets/adventure.png";
import scienceFiction from "../assets/scienceFiction.png";
import historical from "../assets/historical.png";
import adult from "../assets/adult.jpg"


const Genres =()=>{

    return(
        <div>
                    {/* Genre intro div */}
        <div className=" flex flex-row mx-10 child:mx-10">
          <img
            src={girlBook}
            alt=""
            className=" max-h-[70vh]  max-w-full mt-3 "
          />
          <div className="ml-4 child:mb-2">
            <h1 className="text-2xl font-bold">
              How many book genres are there?
            </h1>
            <p>
              When it comes to literary genres, the diversity is truly
              remarkable.
              <br />
              While this article highlights 40 of the most common genres, the
              total number exceeds 60, depending on different literary circles.
              <br /> <br />
              For those interested in subgenres, Reedsy Discovery lists 120
              distinct categories, and Amazon's catalog boasts over 18,000! With
              such a vast array of genres and subgenres, finding your niche can
              feel overwhelming.
              <br />
              You can discover your perfect genre match, tailored just for you.
              Whether you're into thrillers, romance, science fiction, or
              fantasy, understanding where your preferences lie can make your
              reading journey more enjoyable and personalized. So, take the quiz
              today and embark on a new literary adventure that aligns with your
              tastes.
            </p>
          </div>
        </div>

        {/* Fantasy Genre div */}
        <div className="  flex flex-row mx-10 child:mx-10">
          <div className="ml-4 child:mb-2">
            <h1 className="text-2xl font-bold">Fantasy</h1>
            <p>
              This book genre is characterized by elements of magic or the
              supernatural and is often inspired by mythology or folklore. In
              high fantasy — one that’s set in an entirely fictional world —
              these magical elements are at the forefront of the plot, as in
              Trudi Canavan’s Black Magician trilogy. In low fantasy or magical
              realism, however, magic is subtly woven into an otherwise
              familiar, real-world setting. You can delve into fantasy’s many
              subgenres to get to know your Arcanepunk from your Flintlock, and
              find your book’s home!
            </p>
          </div>
          <img src={fantasy} alt="" className=" max-h-[70vh]  max-w-full " />
        </div>

        {/* Science-fiction genre div */}
        <div className="genre-scienceFiction  flex flex-row mx-10 child:mx-10">
          <img
            src={scienceFiction}
            alt=""
            className=" max-h-[70vh]  max-w-full mt-3 "
          />
          <div className="ml-4 child:mb-2">
            <h1 className="text-2xl font-bold">Science Fiction </h1>
            <p>
              Though science fiction and fantasy are often considered two sides
              of the same (speculative fiction) coin, sci-fi is distinguished by
              its preoccupation with real or real-feeling science.
              <br />
              <br />
              Lots of sci-fi is set in the distant future, which makes it a
              seedbed for stories about time travel and space exploration. But
              your science fiction novel doesn’t need to be inspired by “hard”
              science like physics and astronomy.
              <br />
              Some of the books in this genre reflect on “soft” sciences, such
              as sociology and anthropology, to predict the future of the human
              race — more on that next!
            </p>
          </div>
        </div>

        {/* Action-Adventure genre div */}
        <div className="  flex flex-row mx-10 child:mx-10">
          <div className="ml-4 child:mb-2">
            <h1 className="text-2xl font-bold">Action & Adventure</h1>
            <p>
              If you’re writing adventure, then chances are your book follows
              the structure of the Hero’s Journey. Your protagonist has a very
              important goal to achieve, but they’re really going to have to go
              through the wringer first! You throw up obstacle after obstacle,
              putting your hero in downright dangerous situations but
              eventually, they triumph and return home transformed. The action
              and adventure genre also complements a huge range of others, which
              means it has its fingers in everything from fantasy novels like
              The Hobbit to classic romance like Jane Eyre.
            </p>
          </div>
          <img src={adventure} alt="" className=" max-h-[70vh]  max-w-full " />
        </div>

        {/* Historical genre div */}
        <div className="genre-scienceFiction  flex flex-row mx-10 child:mx-10">
          <img
            src={historical}
            alt=""
            className=" max-h-[70vh]  max-w-full mt-3 "
          />
          <div className="ml-4 child:mb-2">
            <h1 className="text-2xl font-bold">Historical </h1>
            <p>
              This book genre encompasses fictional stories in a historical
              setting, carefully balancing creativity and facts. 
              <br />In most cases,
              the characters and events are imagined by the author and enriched
              with historically accurate details from a specific time period.
              <br />
              Take The Help by Kathryn Stockett, for example — a fictional story
              set in Mississippi during the Civil Rights Movement. But occasionally, as is the case with Hilary Mantel’s Cromwell trilogy, the author builds the main story around real historical figures and events. 
              <br />
              Like almost all of these genres, it's crucial
              that historical fiction works in exposition and historical detail
              subtly
            </p>
          </div>
        </div>

        {/* Adult genre div */}
        <div className="  flex flex-row mx-10 child:mx-10">
          <div className="ml-4 child:mb-2">
            <h1 className="text-2xl font-bold">
              Young Adult
            </h1>
            <p>
            The shiny new penny on this book genres list, new adult is like young adult aged-up: coming-of-age stories after the messiness of adolescence.
            <br />Its college-age protagonists are walked through the gauntlet of becoming fully-fledged grownups, ditching the stress of the SATs and senior prom for college exams, career transitions, and more mature first times.
            <br />
            The characters exit childhood and enter adulthood — a transition that results in a loss of innocence and a shifting sense of identity. 
            <br />
            Big names in New Adult, like Cora Carmack, tend to write steamy romances set in dorm rooms. But this genre isn’t all about collegiate love stories — your gritty urban fantasy or immersive historical fiction could find its home here, too. 
            </p>
            <p>
              We have many more genres of books like : 
              <strong> Drama, Mistry, Thriller, Cartoon, Romance, Bioagraphy, Autography</strong> and so on....
            </p>
          </div>
          <img src={adult} alt="" className=" max-h-[70vh]  max-w-full " />
        </div>

        </div>
    )
}

export default Genres;