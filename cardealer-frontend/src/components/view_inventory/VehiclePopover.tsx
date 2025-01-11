import { useEffect, useRef } from 'react';
import { Popover } from 'bootstrap';

interface VehicleProps {
  id: number;
  headline: string
  description: string
  image: string
  year: number
  miles: number
  drivetrain: string
  engine: string
  color: string
  MPG_city: number
  MPG_highway: number
  modelId: number
  features: string[]
  price: number
}

const VehiclePopover: React.FC<VehicleProps> = ({ id, headline, description, image, year, miles, drivetrain, engine, color, MPG_city, MPG_highway, modelId, features, price}) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const popover = new Popover(popoverRef.current!, {
      trigger: 'manual',
      delay: { show: 750, hide: 0}
    });

    const showPopover = () => popover.show();
    const hidePopover = () => popover.hide();

    popoverRef.current!.addEventListener('mouseenter', showPopover);
    popoverRef.current!.addEventListener('mouseleave', hidePopover);

    return () => {
      popoverRef.current!.removeEventListener('mouseover', showPopover);
      popoverRef.current!.removeEventListener('mouseleave', hidePopover);
    };
  }, []);

  return (
    <div ref={popoverRef} data-bs-toggle="popover" data-bs-content={
    <div>
      <img src={image} />
    </div>
    }>
      <img src={image} style={{ width: "400px", height: "250px" }} alt={headline} />
      <h3>{headline}</h3>
      <h4>${price}</h4>
    </div>
  )

}

export default VehiclePopover;