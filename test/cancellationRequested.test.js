import { assert } from "@dmail/assert"
import {
  createCancellationSource,
  createCancellationToken,
  cancellationTokenCompose,
} from "../index.js"

{
  const cancellationSource = createCancellationSource()
  const cancellationSourceToken = cancellationSource.token
  const cancellationToken = createCancellationToken()
  const compositeCancellationToken = cancellationTokenCompose(
    cancellationToken,
    cancellationSourceToken,
  )
  cancellationSource.cancel()

  assert({
    actual: compositeCancellationToken.cancellationRequested,
    expected: true,
  })
}
