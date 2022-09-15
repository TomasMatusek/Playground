/**
 * Event loop - allows nodejs to perform non-blocking I/O operations despite the fact that !!! JavaScript is single-threaded !!!
 * - this is why JavaScript is based so much on callbacks, and more recently on promises and async/await
 * - OFFLOADING of operations to the browser (system kernel) (using setTimeout() with callback method / Async/Await)
 *     - so it can be executed in mutliple threads
 *     - to offload use setTImeout()
 * - Imediate code is executed always first and only after that completed callbacks from QUEUE are executed
 * 
 * Stack <-------> Event Loop <-------> Task Queue (finished callbacks)
 * 
 * 1) CALL STACK
 * - holds methods (code) to be executed in given order how functions are called
 * Sample:
 * - main()
 * - main() -> foo()
 * - main() -> foo() -> bar()
 * - main() -> foo()
 * - main()
 *  
 * 3) EVENT LOOP
 * - check task queue to push waiting finished callback to stack (so they are executed)
 * - callbacks are pushed to stack only after it finished it's main() run
 * 
 * 2) TASK QUEUE (OR Message Queue)
 * - holds finished callbacks to be pushed into stack by event loop
 * 
 * 
 * - callback = function calling another function after its done
 * - setTimeout(() => comsole.log('test'), 5000); -> this is not executing code afeter 5 seconds, it is minimum time but not guaranteed, it will be executed when main is done + there are no other waiting callbacks
 * - Event loops per browser tab
 * - UI rendering is stucked (UI don't respond to user actions) if there is e.g. long running request (when exeucted sync)
 * - if there is blocking function whole stack is frozen until it's done
 * - callback VS. Promise
 * 
 * 
 * Links:
 * @see https://www.youtube.com/watch?v=8aGhZQkoFbQ
 * @see http://latentflip.com/loupe/
 * @see https://course-api.com/
 */