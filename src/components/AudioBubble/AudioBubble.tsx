import classNames from "@/helpers/classNames"
import Image from "next/image"

interface AudioBubbleProps {
  imageClassName?: string
}

export default function AudioBubble({ imageClassName = "" }: AudioBubbleProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex">
        <Image
          height={16}
          width={16}
          src="https://imagedelivery.net/_Fh-Z9aj1rlSxXMDl1yqsg/8d7b9872-1551-48c7-7bdb-0a1ce7e85a00/character"
          alt=""
          className={classNames("w-32 sm:w-40 h-full", imageClassName)}
        />

        <div className="relative flex text-sm sm:text-base border-r-2 border-l-2 border-t-2 border-b-2 mt-4 sm:mt-8 ml-3  rounded-2xl font-bold text-gray-700">
          <div
            className="h-full border-r-2  py-4 flex justify-center  px-6 cursor-pointer"
            //    onClick={() => solution && speak(solution)}
          >
            <Image
              height={50}
              width={50}
              alt="speech text"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADAElEQVR4nO3aS4gURxzH8c9oDGTNmuBqHkLE1awGwZt4EJINAYPgCxQEUUQhBvTiwQVPXn2BF8WTh0ByyQNBBSGEKOQQDx6CBzFB8RGiwUREYZWgSVYPVYuzbM/07NizM83UF4YaqB+/7vpNT/W/q5pEIpFIJBKJRHcytc3HH8AbeNjm85h0XsFuPMLHbT6XSWcJLuJZ/HRNANOwF0+8GHzXBLAcV4wdeFcE0Itj+F/24IsMoEf7J/UxrMQttQdeZAB9eIALmFGA30vRhy/lD7zIAHpwLfr9jOkFeDbFGtzR+OCL/Au8h+vR8yQqBfk2xBycMrGBt2ISXCQUVc+EOqPlVLCj6qDtDgDWRd/H6C/YewwLcF7zA2/lbfCr6H26WYNezM/4zI397wgJv+zgWxXAWxjGCJY2Y7BN9snejP3zavS3OoD38UGD2v3R/7t6oikTOHgn8BN+wUcNaI/iP6zFrFqisgXwDV7DGflXwl18j1exvpaobAEM4WthDeF4A/rRSXBFLUHZAhjBTvyNT7AqR/9jbAdrCcoWAKHmOBy/b8nR3hKeEWYLd4ZxlDEA+FaY4VcLq0v1+C22C7M6yxrAH7iN1/FujvZebGdmdZY1APgztnNydMOx7c3qLHMAo4+8j3N002L7b1ZnWQOYIjz+Eh6/6zG6QDKc1VnWAD4UaoGrwixfj3mxzQyqrAF8Ftu6db5w+c8X6odrWYIyBrAcm/EPTuRolwml8K9RP46yBdAv/OoVHMLvOfpPY3uulqBsAZwSbns/4ECOtoJN8fvZWqK8KqrTuCxMZhvxNEc7KGy+3lbnCihbAJsnoN0X2xPCxsyEKPuS2Mro/QBvtsAfnbsoOh03ovdQwd7jqGAr7uucAL6Ivpe8KINbTqdsjOyJnsNYXKBvw2zEX9oTwOdCxTeCDQV5NkU7NkffFlaAR7CrAL9CmMzt8ak4gu0FeBVKDw4Kv85k3gY7jq59Raaarn5JqpqufU2umq5+UbKaAS1+iSGRSCQSiUQikcjmOQuzZthPtLlxAAAAAElFTkSuQmCC"
            />
          </div>
          <div
            className="flex w-full px-4 items-center justify-center cursor-pointer"
            //   onClick={() => solution && speak(solution, 0.3)}
          >
            <Image
              height={7}
              width={16}
              alt="speech text"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADVklEQVRoge3YbahlUxgH8N+943Ivc8cMZkrXaOZq0siHUYRPSmGKlDGS8lKKpFBDZBQfhITCJx9GSXkbER8kKaIxmJLXTCMUQ4xr5o7xcl3muj48+8zsezr7nP1yzj3zYf/r6ezW2uv/rP9z1lrPszY1atSoUaNGjUMe6/A2fsckPsStOLqfkyqKxzCbYb/ggv5NLT9ulC2iYTO4sl8TzIOl+E1nIbP4G2dWdTiKtbgPb+FLTIhITeALPCWiNlKA956cIhr2fpnJD+IivITpAs724HYc3oH/CPxUUMgszi8i4jx8XMJJ2rbhhDY+1uXguBNHYWOq7ek8AkbwREUBafsWYxm+ns8xfmHy7miq7etOIhbhvS6KaNi7WNDkayH+yDF2Y/LuXam26XYihvBOD0Q07Bmcm/J3eQWuqXZCHuqhiLQ9mPgbx78lOT7PEnFqBdKiNoOVid8PSnI8MJgh5BYclqWyyxjEmuR5Z4nx+/BoKyGjuKLsrEpid/J7fIu+2TbjprAeu1p1rjU/S6ph34mDZVgkzub+m3GpqBwabX/hOaxqI3JOoum1TYtECze06L+3aW5LsVzOZf/IPIn40cHjdyV+bup/Xeyf0nh4HkS8iuMSf8uxval/r+zsnxs39VDAN2K9N3CJ2OjN791WVQSc3gMBe3GHqG5hsez67VdRFFbG5i4K2CmiuyjhXoDrxVU1a8zj3RCxWGTaKpP/TxSFVzt4/xjAhfJdA9L1V2ksSSZSRsBX4nY3nuIbwlX4rEAQRrshBF7I6XQf3sAGnNzEsQJ3i2RXJBi7lUQ6sawWx+C12CGWwpiI0h5xBd0uMuw2fCqWYQPH4GJcg3PEciqKtuV4JwyIDwgzuK7AuCGcJa6eW7Bf9cPhT+UCYEBk8g2pti3YhI9E9h0We2eZWEKrcRrOUOzrSF6cIv75wpgQ0difPO/SneiWtSKrYg5W4WxzozuCF/skZHNZIa0wJrJxP4RMKfGRulU5PIAnc5BtEtXpSUL4Ehwp/s1J/CP22Pf4RHxJn8RW7avaYVyW8FfCep2j9nIF/mdz8L9Zgf8A7u/gZAeOrcC/DD908LG1Av8BjItk13xyTeE1nNgFHyvwisgbaR/T4thfkz20Ro0aNWocQvgf9SQagNC4mkgAAAAASUVORK5CYII="
            />
          </div>
          <div
            className="absolute rounded-b h-4 border-b-2 bg-white  border-l-2 w-4 rotate-45 transform "
            style={{ left: "-9px", bottom: "22px" }}
          ></div>
        </div>
      </div>
    </div>
  )
}
