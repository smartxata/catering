export default function Stars(props: any) {
  const {stars} = props;
  console.log(stars)

  return (
    <>
      <div style={{width: "20px"}} >
        <svg
          data-ux="SVG"
          viewBox="0 0 50 50"
          className="x-el x-el-svg c2-1 c2-2 c2-k c2-4o c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"
        >
          <defs>
            <linearGradient id="fillStyle-rating4-star-0">
              <stop offset="0%" stop-color="#FBCF1E"></stop>
              <stop offset="100%" stop-color="#FBCF1E"></stop>
            </linearGradient>
          </defs>
          <path
            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
            fill="url(#fillStyle-rating4-star-0)"
          ></path>
        </svg>
      </div>
    </>
  );
}
