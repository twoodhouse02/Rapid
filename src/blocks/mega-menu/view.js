import { store, getContext } from "@wordpress/interactivity";

const { actions } = store("rapid/mega-menu", {
  actions: {
    toggleMenu() {
      const context = getContext();

      if (context.isMenuOpen) {
        actions.closeMenu();
      } else {
        const event = new CustomEvent("mega-menu-opened", {
          detail: { menuSlug: context.menuSlug },
        });
        document.dispatchEvent(event);
        context.isMenuOpen = true;
      }
    },
    closeMenu() {
      const context = getContext();
      context.isMenuOpen = false;
    },
  },
});
