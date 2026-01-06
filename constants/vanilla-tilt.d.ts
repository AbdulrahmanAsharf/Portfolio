import "vanilla-tilt";

declare module "vanilla-tilt" {
  interface VanillaTilt {
    destroy(): void;
  }
}

interface HTMLElement {
  vanillaTilt?: {
    destroy(): void;
  };
}