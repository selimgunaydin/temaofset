import { motion } from "framer-motion";
import React from "react";

export default function Location() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="location"
      >
        <div className="google-map">
          <iframe src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=41.021236%2C%2028.916663+(Temaofset)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed" ></iframe>
        </div>
      </motion.div>
    </>
  );
}


