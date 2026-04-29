/**
 * Simple KettuTweaks Plugin
 * Works with Kettu / Bunny / Vendetta-style frameworks.
 */

const framework = window.kettu || window.bunny || window.vendetta || {};
const ui = framework.ui || {};
const storage = framework.storage || framework.settings?.storage || {};

const showToast =
  ui.toasts?.showToast ||
  ui.showToast ||
  ((msg) => console.log("[SimplePlugin]", msg));

const PLUGIN_NAME = "Simple Kettu Plugin";

function log(...args) {
  console.log(`[${PLUGIN_NAME}]`, ...args);
}

export default {
  onLoad() {
    log("Plugin loaded");

    const message = storage.customMessage || "Hello from KettuTweaks!";

    showToast(message);
  },

  onUnload() {
    log("Plugin unloaded");
    showToast("Simple plugin unloaded");
  },

  settings: {
    customMessage: {
      type: "string",
      label: "Toast message",
      default: "Hello from KettuTweaks!",
      description: "Message shown when the plugin loads"
    }
  }
};
