"use client";
import { motion } from "framer-motion";
import { BiSolidRightArrow } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const pulse = {
  animate: {
    opacity: [1, 0.3, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const Reviews = () => {
  const goodReviews = [
    {
      id: 1,
      reviewer: "Rahim Ahmed",
      rating: 5,
      text: "Darun ekta product! Amar expectation er thekeo beshi valo. Sobai try korte paro.",
      date: "2026-04-28",
    },
    {
      id: 2,
      reviewer: "Karim Hasan",
      rating: 4.8,
      text: "Onno product gula use korechi, kintu eta best mone holo. Use korao onek easy.",
      date: "2026-04-25",
    },
    {
      id: 3,
      reviewer: "Nusrat Jahan",
      rating: 5,
      text: "Ekdom perfect! Sob dik thekei satisfied. Abar nishchoi kinbo.",
      date: "2026-04-22",
    },
    {
      id: 4,
      reviewer: "Tanvir Hossain",
      rating: 4.9,
      text: "Quality onek valo, ar customer service o fast. Problem holeo tara quickly solve kore.",
      date: "2026-04-20",
    },
    {
      id: 5,
      reviewer: "Mim Akter",
      rating: 5,
      text: "Ei bochorer moddhe amar best purchase! Onk useful, ami khub happy.",
      date: "2026-04-18",
    },
    {
      id: 6,
      reviewer: "Sabbir Rahman",
      text: "Story ta onek interesting chilo. Suspense ar drama mix ta darun lagse.",
      rating: 4.5,
      date: "2026-04-25",
    },
    {
      id: 7,
      reviewer: "Jannat Islam",
      text: "Boi ta valo chilo, kintu majhkhan ektu slow lagse. Ending ta valo chilo.",
      rating: 3.8,
      date: "2026-04-22",
    },
    {
      id: 8,
      reviewer: "Fahim Chowdhury",
      text: "Osadharon ekta boi! Character gula onek strong chilo, pore moja paisi.",
      rating: 5,
      date: "2026-04-20",
    },
    {
      id: 9,
      reviewer: "Rifat Khan",
      text: "Amar temon valo lage nai. Lekha thik chilo kintu story ta dhorte parini.",
      rating: 2.5,
      date: "2026-04-17",
    },
    {
      id: 10,
      reviewer: "Sumaiya Kabir",
      text: "Onk emotional ekta golpo. Seshe chokhe pani chole ashchilo. Recommend korbo.",
      rating: 4.8,
      date: "2026-04-15",
    },
  ];

  return (
    <div className="bg-white !pb-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-11/12 !mx-auto text-center"
      >
        {/* Badge */}
        <div className="!mt-12 md:!mt-0 inline-flex items-center gap-2  border border-(--rust) rounded-full !px-4 !py-2 text-sm text-(--rust) font-['Space_Mono',monospace]">
          <motion.span
            variants={pulse}
            animate="animate"
            className="w-1.5 h-1.5 rounded-full bg-(--rust) shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
          />
          Reviews
        </div>

        {/* Heading */}
        <h1
          className="font1 !mt-8  leading-none tracking-tighter "
          style={{ fontSize: "clamp(40px, 8vw, 40px)" }}
        >
          See What Our Users Have To Says
        </h1>
      </motion.div>

      <div className=" !mt-6 hidden xl:block">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          useKeyboardArrows={true}
          swipeable={true}
          showThumbs={false}
          selectedItem={1}
          centerMode={true}
          centerSlidePercentage={20}
          renderArrowNext={(clickHandler, hasNext, label) => (
            <button
              onClick={clickHandler}
              className="absolute right-0 top-1/2 transform -translate-y-1/2  bg-(--rust)/30 !px-2 !py-2 rounded-full text-2xl text-(--rust)"
              aria-label={label}
            >
              <BiSolidRightArrow />
            </button>
          )}
        >
          {/* Cards */}
          {goodReviews.map((review) => (
            <div
              key={review.id}
              className="bg-(--rust)/10 w-56  rounded-2xl !space-y-2 !px-6 !py-3 !mx-9  border border-(--rust)/30"
            >
              <p className="flex-1 h-36 text-(--muted2)">{review.text}</p>
              <h3 className="text-lg font-bold text-(--rust)">
                {review.reviewer}
              </h3>
              <div className="flex  justify-between">
                <h3 className="flex font-bold text-(--muted) items-center gap-1.5 justify-center">
                  {" "}
                  <BsStarFill className="h-4 text-orange-500" /> {review.rating}
                </h3>
                <h3 className="text-(--muted)">{review.date}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className=" !mt-6 hidden lg:block xl:hidden">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          useKeyboardArrows={true}
          swipeable={true}
          showThumbs={false}
          selectedItem={1}
          centerMode={true}
          centerSlidePercentage={25}
          renderArrowNext={(clickHandler, hasNext, label) => (
            <button
              onClick={clickHandler}
              className="absolute right-0 top-1/2 transform -translate-y-1/2  bg-(--rust)/30 !px-2 !py-2 rounded-full text-2xl text-(--rust)"
              aria-label={label}
            >
              <BiSolidRightArrow />
            </button>
          )}
        >
          {/* Cards */}
          {goodReviews.map((review) => (
            <div
              key={review.id}
              className="bg-(--rust)/10 w-56  rounded-2xl !space-y-2 !px-6 !py-3 !mx-9  border border-(--rust)/30"
            >
              <p className="flex-1 h-36 text-(--muted2)">{review.text}</p>
              <h3 className="text-lg font-bold text-(--rust)">
                {review.reviewer}
              </h3>
              <div className="flex  justify-between">
                <h3 className="flex font-bold text-(--muted) items-center gap-1.5 justify-center">
                  {" "}
                  <BsStarFill className="h-4 text-orange-500" /> {review.rating}
                </h3>
                <h3 className="text-(--muted)">{review.date}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className=" !mt-6 hidden md:block lg:hidden">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          useKeyboardArrows={true}
          swipeable={true}
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={32}
          renderArrowNext={(clickHandler, hasNext, label) => (
            <button
              onClick={clickHandler}
              className="absolute right-0 top-1/2 transform -translate-y-1/2  bg-(--rust)/30 !px-2 !py-2 rounded-full text-2xl text-(--rust)"
              aria-label={label}
            >
              <BiSolidRightArrow />
            </button>
          )}
        >
          {/* Cards */}
          {goodReviews.map((review) => (
            <div
              key={review.id}
              className="bg-(--rust)/10 w-56  rounded-2xl !space-y-2 !px-6 !py-3 !mx-9  border border-(--rust)/30"
            >
              <p className="flex-1 h-36 text-(--muted2)">{review.text}</p>
              <h3 className="text-lg font-bold text-(--rust)">
                {review.reviewer}
              </h3>
              <div className="flex  justify-between">
                <h3 className="flex font-bold text-(--muted) items-center gap-1.5 justify-center">
                  {" "}
                  <BsStarFill className="h-4 text-orange-500" /> {review.rating}
                </h3>
                <h3 className="text-(--muted)">{review.date}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className=" !mt-6 hidden sm:block md:hidden">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          useKeyboardArrows={true}
          swipeable={true}
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={38}
          renderArrowNext={(clickHandler, hasNext, label) => (
            <button
              onClick={clickHandler}
              className="absolute right-0 top-1/2 transform -translate-y-1/2  bg-(--rust)/30 !px-2 !py-2 rounded-full text-2xl text-(--rust)"
              aria-label={label}
            >
              <BiSolidRightArrow />
            </button>
          )}
        >
          {/* Cards */}
          {goodReviews.map((review) => (
            <div
              key={review.id}
              className="bg-(--rust)/10 w-56  rounded-2xl !space-y-2 !px-6 !py-3 !mx-9  border border-(--rust)/30"
            >
              <p className="flex-1 h-36 text-(--muted2)">{review.text}</p>
              <h3 className="text-lg font-bold text-(--rust)">
                {review.reviewer}
              </h3>
              <div className="flex  justify-between">
                <h3 className="flex font-bold text-(--muted) items-center gap-1.5 justify-center">
                  {" "}
                  <BsStarFill className="h-4 text-orange-500" /> {review.rating}
                </h3>
                <h3 className="text-(--muted)">{review.date}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className=" !mt-6  sm:hidden">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          useKeyboardArrows={true}
          swipeable={true}
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={70}
          renderArrowNext={(clickHandler, hasNext, label) => (
            <button
              onClick={clickHandler}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl bg-(--rust)/30 !px-2 !py-2 rounded-full text-(--rust)"
              aria-label={label}
            >
              <BiSolidRightArrow />
            </button>
          )}
        >
          {/* Cards */}
          {goodReviews.map((review) => (
            <div
              key={review.id}
              className="bg-(--rust)/10 w-56  rounded-2xl !space-y-2 !px-6 !py-3 !mx-9  border border-(--rust)/30"
            >
              <p className="flex-1 h-36 text-(--muted2)">{review.text}</p>
              <h3 className="text-lg font-bold text-(--rust)">
                {review.reviewer}
              </h3>
              <div className="flex  justify-between">
                <h3 className="flex font-bold text-(--muted) items-center gap-1.5 justify-center">
                  {" "}
                  <BsStarFill className="h-4 text-orange-500" /> {review.rating}
                </h3>
                <h3 className="text-(--muted)">{review.date}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
