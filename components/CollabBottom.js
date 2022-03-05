import Image from 'next/image';

export default function CollabBottom(props){
    return (
        <>
          <div className="work-div pb-[0rem] lg:mb-[-1.5rem] 2xl:mb-[-3rem] 2xl:mt-[-5rem]  lg:mt-[-2.5rem]">
            <div className="flex justify-center">
              <Image src={props.src} className="aspect-video object-cover rounded-xl" alt={props.alt}/>
            </div>
            <div>
              <h2 className="text-center">{props.title}</h2>
              <p className="text-center">{props.content}</p>
            </div>
          </div>
        </>
    )
}