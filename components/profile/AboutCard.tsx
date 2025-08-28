import React from "react";
import {
  Code,
  MapPin,
  Phone,
  Mail,
  Globe,
  Github,
  Twitter,
} from "lucide-react";
import { USER } from "@/data/user";

const ContactCard = () => {
  return (
    <div className=" font-mono  lg:text-base text-sm lg:whitespace-nowrap sm:max-w-sm">
      <div className="space-y-3 text-gray-300">
        <div className="flex items-center space-x-3">
          <Code size={16} className="text-gray-500 flex-shrink-0" />
          <span className="">{USER.jobTitle}</span>
        </div>
        {/* <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-gray-600 rounded-full flex-shrink-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
          <span>Software Developer @</span>
        </div> */}
        <div className="flex items-center space-x-3">
          <MapPin size={16} className="text-gray-500 flex-shrink-0" />
          <span>Jalpaiguri, West Bengal, India</span>
        </div>
        {/* <div className="flex items-center space-x-3">
          <Phone size={16} className="text-gray-500 flex-shrink-0" />
          <span>+91 98765 43210</span>
        </div> */}
        <div className="flex items-center space-x-3">
          <Mail size={16} className="text-gray-500 flex-shrink-0" />
          <a className="hover:text-white transition-colors">
            iamabhishe1310@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <Globe size={16} className="text-gray-500 flex-shrink-0" />
          <a
            href="https://0bhishek.tech"
            className="hover:text-white transition-colors"
          >
            0bhishek.tech
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <Github size={16} className="text-gray-500 flex-shrink-0" />
          <a
            href="https://github.com/iCoderabhishek"
            className="hover:text-white transition-colors"
          >
            iCoderabhishek
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <Twitter size={16} className="text-gray-500 flex-shrink-0" />
          <a
            href="https://x.com/0bhishek"
            className="hover:text-white transition-colors"
          >
            0bhishek
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
