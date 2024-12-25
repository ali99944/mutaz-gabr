import { PrismaClient } from "@prisma/client";

class Dao {
    static prisma?: PrismaClient

    static get instance() {
        if (!Dao.prisma) {
            Dao.prisma = new PrismaClient()
        }
        return Dao.prisma
    }
}

export default Dao