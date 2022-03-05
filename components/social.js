import Image from 'next/image';

export default function Social(props){
    return (
        <>
          <a href={props.href} target="_blank" rel="noreferrer" className="w-[2.0rem] mb-[1.5rem] mx-[0.5rem]">
            <Image src={props.src} alt={props.alt} height={32} width={32}/>
          </a>
        </>
    )
}
