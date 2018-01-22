class ISS {
    sayHelloWorld(hello, world) {
        return hello + " " + world + " :)"
    }
}

SpaceWorker.provide(ISS, self)