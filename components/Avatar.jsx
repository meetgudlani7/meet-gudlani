import Image from "next/image";

const Avatar = ({ size }) => {
  return (
    <div className={`w-${size} h-${size} rounded-full overflow-hidden`}>
      <img src="/avatar.png" alt="Avatar" />
    </div>
  );
};

export default Avatar;
