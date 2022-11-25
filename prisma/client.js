import { PrismaClient } from '@prisma/client'

// Para permitir que o next possa lidar com os ids das models sem problemas
BigInt.prototype.toJSON = function () {
	return this.toString()
}

// Para não criar nova instância a cada importação

export const prisma = new PrismaClient({
	log: ['query', 'info', 'warn', 'error'],
})
