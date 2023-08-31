import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { Observable } from 'rxjs'

@Injectable()
export class LockInterceptor implements NestInterceptor {
    private isLocked: boolean = false
    private lockPromise: Promise<void> | null = null

    async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
        if (this.isLocked) {
            if (!this.lockPromise) {
                this.lockPromise = new Promise<void>((resolve) => {
                    const unlock = () => {
                        this.isLocked = false
                        this.lockPromise = null
                        resolve()
                    }
                    setTimeout(unlock, 10000) // Timeout to prevent potential deadlocks
                })
            }

            await this.lockPromise
        }

        try {
            this.isLocked = true // Set the lock flag
            return next.handle() // Proceed with the request
        } finally {
            this.isLocked = false // Reset the lock flag after the request is complete
        }
    }
}
