import Image from 'next/image';

export default function CollabBottom(props){
    return (
        <>
          <div className="work-div lg:mb-[-1.5rem] 2xl:mb-[-1.5rem] 2xl:mt-[-3.5rem] lg:mt-[-2.5rem]">
            <div className="flex justify-center">
              <Image src={props.src} height={900} width={1600} className="object-cover rounded-xl" alt={props.alt}/>
            </div>
            <div>
              <h2 className="text-center">{props.title}</h2>
              <p className="text-center">{props.content}</p>
            </div>
          </div>
        </>
    )
}
