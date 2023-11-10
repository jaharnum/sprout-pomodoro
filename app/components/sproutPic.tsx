import Image from 'next/image';
import seed from '../../public/images/seed.svg';
import watering1 from '../../public/images/watering1.svg';
import sprout1 from '../../public/images/sprout1.svg';
import watering2 from '../../public/images/watering2.svg';
import sprout2 from '../../public/images/sprout2.svg';
import watering3 from '../../public/images/watering3.svg';
import sprout3 from '../../public/images/sprout3.svg';
import watering4 from '../../public/images/watering4.svg';

// give sproutPic a number and it will return the image for that stage
// 0 - 7 (eventually 8)
// external logic should handle what number we are at and repeat 6 and 7

const allStages = [
    {
        'src': seed,
        'alt': 'A seed ready to be planted in a hole in the dirt'
    },
    {
        'src': watering1,
        'alt': 'A watering can pouring water on a newly planted seed'
    },
    {
        'src': sprout1,
        'alt': 'A small sprout, still encased in its seed, poking out of the dirt'
    },
    {
        'src': watering2,
        'alt': 'A watering can pouring water on a small sprout'
    },
    {
        'src': sprout2,
        'alt': 'A small sprout with two leaves'
    },
    {
        'src': watering3,
        'alt': 'A watering can pouring water on a growing sprout'
    },
    {
        'src': sprout3,
        'alt': 'A thriving sprout with four leaves'
    },
    {
        'src': watering4,
        'alt': 'A watering can pouring water on a thriving sprout'
    },    
];

export const SproutPic = ( props: { stage: number; } ) => {

    const {src, alt} = allStages[props.stage];

    return(
        <Image src={src} alt={alt}/>
    )
}