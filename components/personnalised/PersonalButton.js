const Bounce = ({ txt, animation }) => (
    <button className={`bg-red-500 animate-${animation}`}>
        {txt}
    </button>
)

const Wiggle = () => (
    <button>
        Wiggle
    </button>
)

const Twist = () => (
    <button>
        Twist
    </button>
)

const Normale = () => (
    <button>
        Normale
    </button>
)

export { Bounce, Wiggle, Twist, Normale }