import React from "react";
import vegetables from "../images/vegetables.jpeg";

function Tips() {
  return (
    <div className="general">
      <h1 id="tips-title">Keep food fresh</h1>
      <img id="tips-img1" src={vegetables}></img>
      <p>
        It’s not always easy to keep your food fresh enough to eat, but there
        are ways to help preserve your ingredients and leftovers until you’re
        ready to eat them. Here are some ideas for the best way to store foods
        like rice, dairy and meat safely; keeping your food fresher for longer.
        You will also find tips on understanding date labels and how best to use
        your fridge and freezer to make the most out of your food. Don’t forget
        to check the A-Z storage guide{" "}
        <a href="https://www.lovefoodhatewaste.com/article/food-storage-a-z">
          {" "}
          here{" "}
        </a>{" "}
        if you’re ever unsure of how to store an item.
      </p>

      <div className="explain">
        <p>
          Just because&nbsp;a date on your food has passed, it doesn’t mean you
          cannot eat it – see what type of date it is and check it with the
          definitions below:
        </p>
        <ul>
          <li>
            You can eat or freeze foods right up until the end of the&nbsp;
            <strong>‘use-by date’</strong>. But as use-by dates are safety
            dates, do not eat after this date has passed (unless frozen first).
          </li>
          <li>
            <strong>‘Best before’</strong>
            &nbsp;dates are about quality rather than safety. So if the date has
            passed the food should be safe to eat, but might begin to lose its
            flavour and texture. Eggs can be eaten a day or two after their best
            before date has passed, and must be cooked thoroughly.
          </li>
          <li>
            <strong>‘Sell by’</strong>
            &nbsp;and&nbsp;
            <strong>‘display until’</strong>
            &nbsp;dates are for shop staff so can be ignored.
          </li>
        </ul>
      </div>
      <div className="fridge">
        <ul>
          <li>Fridges should be between 0°C and 5°C.</li>
          <li>
            Leftovers should be cooled within 90 minutes and then refrigerated
            for up to two days.
          </li>
          <li>Store eggs in their box in the fridge.</li>
          <li>
            Don’t store food in open cans and tins as the metal may transfer to
            the contents. Instead, put the food in a storage container or
            covered bowl.
          </li>
        </ul>
        <p>
          If you’re unsure of how to adjust the temperature of your fridge,
          check out this{" "}
          <a href="https://www.lovefoodhatewaste.com/article/chill-fridge-out">
            handy guide
          </a>
          .
        </p>
      </div>

      <div className="meat">
        <ul>
          <li>
            Store raw meat and poultry in clean, sealed containers on the bottom
            shelf of the fridge.
          </li>
          <li>
            Do not eat meat after the use-by-date (unless it has been frozen)
            and always read the label for storage instructions.
          </li>
          <li>
            Fresh meat, fish and sausages can be frozen before their
            use-by-dates in their own packaging or in airtight containers.
            Consider separating them into the portion sizes you need before
            freezing.
          </li>
          <li>
            You can defrost raw meat, cook it and re-freeze it. Don’t freeze raw
            meat twice.
          </li>
          <li>
            Leftover roast meals can be saved in airtight containers – either
            refrigerate or freeze them.
          </li>
        </ul>
      </div>
      <div className="bread">
        <ul>
          <li>
            Sliced bread, pitta, crumpets, hot cross buns and bagels can all be
            frozen. They can be toasted straight from the freezer.
          </li>
          <li>
            Leftover bread crusts and slightly stale bread make breadcrumbs when
            whizzed in the food processor. These can be stored in the freezer
            for use in bread sauces, savoury crumbles or coating chicken or
            fish.
          </li>
          <li>
            If you’d rather not use bread for sandwiches because it’s starting
            to go hard, it can still make great toast.
          </li>
          <li>
            Use leftover croissants and muffins to make&nbsp;
            <a href="https://www.surreyep.org.uk/reduce-reuse-recycle/food/recipes/">
              <strong>bread and butter pudding</strong>
            </a>
            .
          </li>
          <li>
            You can freeze leftover cake in slices. Cake can be frozen for up to
            one month without affecting the taste or texture if wrapped in a
            layer of plastic wrap followed by a layer of foil.
          </li>
          <li>
            Bread goes stale much faster in the fridge. Instead, store in a
            cool, dark and dry place such as a bread bin or store cupboard.
            Remember to re-seal the pack.
          </li>
          <li>
            A day old loaf of bread can be freshened up by being sprinkled with
            water and put in a hot oven for 10 minutes. It will be soft and
            crusty like a new loaf.
          </li>
          <li>
            Spread garlic butter on the crusts from a loaf and toast under the
            grill. Cut into fingers and serve for a quick and easy snack.
          </li>
          <li>
            Consider buying half loaves of bread&nbsp;if you can’t get through a
            whole one.
          </li>
        </ul>
      </div>
      <div className="vegetables">
        <ul>
          <li>
            Fruit and vegetables are best kept in the bag they come in as it
            keeps them fresher for longer. A shrink-wrapped cucumber will last
            around three times longer than one which has been sold loose!
          </li>
          <li>
            You could also use airtight plastic boxes – such as Tupperware – and
            ice cube trays which are great for freezing stock or fresh herbs in
            a little water.
          </li>
          <li>
            Soak wilted greens in cold water for 30 minutes to revive them for a
            salad or sandwich.
          </li>
          <li>
            Pour boiling water over hard dried fruit which has been in the
            cupboard too long and leave to soak and soften.
          </li>
          <li>
            Potatoes can be frozen,&nbsp;parboil for six minutes, drain and
            cooled before freezing. Mashed potato can be frozen in airtight
            containers.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tips;
