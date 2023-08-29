import EmailIcon from "@/components/Icons/EmailIcon";
import LocationIcon from "@/components/Icons/LocationIcon";
import PhoneIcon from "@/components/Icons/PhoneIcon";
import {
  directions,
  directionsLink,
  email,
  phone,
  whatsapp,
} from "@/constants/contact/ContactInfo";
import { useMemo } from "react";

const useContact = () => {
  const ContactInfo = useMemo(() => {
    return [
      {
        id: 1,
        title: "Our Location",
        description: directions,
        icon: <LocationIcon />,
        link: directionsLink,
        target: "_blank",
      },
      {
        id: 2,
        title: "Phone Number",
        description: phone,
        icon: <PhoneIcon />,
        link: whatsapp,
        target: "_blank",
      },
      {
        id: 3,
        title: "How Can We Help?",
        description: email,
        icon: <EmailIcon />,
        link: `mailto:${email}`,
        target: "_blank",
      },
    ];
  }, []);
  return { ContactInfo };
};

export default useContact;
