module.exports = {
    signOut: async (req, res) => {
       try {
         // Clear the authentication cookies
         res.clearCookie("refreshToken");
         res.clearCookie("accessToken");
   
         // clear the session or any other relevant data here
   
         res.status(200).json({ message: "Signed out successfully" });
       } catch (error) {
         console.error(error);
         res.status(500).json({ message: error.message });
       }
    },
   };
   