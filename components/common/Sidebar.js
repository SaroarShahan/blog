import Box from "./Box";

const Sidebar = ({ children }) => {
  return (
    <aside>
      <Box>
        <Box.Title>সারোয়ার শাহান</Box.Title>
        <Box.Body>
          <p>
            একজন স্বপ্নবাজ, স্বাধীনচেতা, ডানপিটে এবং টেক-লাভার মানুষ। ভালোবাসি
            স্বপ্ন দেখতে। ভালোবাসি নতুন কিছু সম্পর্কে জানতে। তার থেকে বেশি
            ভালোবাসি নিজের অর্জিত জ্ঞানটুকু সবার মাঝে ছড়িয়ে দিতে। ইচ্ছে করে
            বেঁচে থাতে কিন্তু তা সম্ভব নয়। কারণ, এই পৃথিবীতে খুব অল্প সময়ের
            জন্যে এসেছি। এই সুন্দর পৃথিবীতে একটু বেশি সময় বেঁচে থাকার জন্যেই
            কিছু রেখে যাওয়ার চেষ্টা। তাই যখনই সময় পাই লিখতে বসে যাই।
          </p>
        </Box.Body>
      </Box>
      <Box>
        <Box.Title>ফেসবুকে আমি</Box.Title>
        <Box.Body>
          <a
            href="https://www.facebook.com/SaroarShahan"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="/images/shahan.jpg"
              alt="Saroar Shahan"
              title="Me on Facebook"
            />
          </a>
        </Box.Body>
      </Box>
    </aside>
  );
};

export default Sidebar;
