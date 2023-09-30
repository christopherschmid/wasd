import NextAuth from "next-auth";

import { authOptions } from "import/server/auth";

export default NextAuth(authOptions);
