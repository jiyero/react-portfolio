import HeroSection from "../../components/HeroSection";
import spongebob from "../../assets/spongebob.jpeg";
import patrick from "../../assets/patrick.jpg";
import squidward from "../../assets/squidward.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const images = [spongebob, patrick, squidward];
  return (
    <HeroSection
      title="Jihro Abendano"
      className="flex h-screen justify-center items-center"
    >
      <Carousel className="w-full max-w-xl relative">
        <CarouselContent>
          {images.map((img, index) => {
            return (
              <CarouselItem key={index}>
                <img
                  src={img}
                  alt={`${img}`}
                  className="w-96 h-96 rounded-full object-cover"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </HeroSection>
  );
};

export default Hero;
