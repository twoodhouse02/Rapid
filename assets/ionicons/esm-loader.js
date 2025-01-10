wp.domReady(() => {
  // Retry mechanism to find the iframe if it isn't ready immediately.
  const waitForIframe = () => {
    const editorIframe = document.querySelector('iframe[name="editor-canvas"]'); // Update selector based on your inspection.

    if (editorIframe) {
      // Check if the iframe is already loaded.
      const iframeDocument =
        editorIframe.contentDocument || editorIframe.contentWindow.document;

      if (iframeDocument && iframeDocument.readyState === "complete") {
        appendScriptToIframe(iframeDocument);
      } else {
        // Add load event listener for the iframe.
        editorIframe.addEventListener("load", () => {
          appendScriptToIframe(iframeDocument);
        });
      }
    } else {
      setTimeout(waitForIframe, 500); // Retry after 500ms.
    }
  };

  // Function to append the script to the iframe's body.
  const appendScriptToIframe = (iframeDocument) => {
    if (
      iframeDocument &&
      !iframeDocument.querySelector('script[src*="ionicons.esm.js"]')
    ) {
      const script = iframeDocument.createElement("script");
      script.type = "module"; // Ensure the script is loaded as an ES Module.
      script.src = `${window.location.origin}/wp-content/themes/Rapid/assets/ionicons/ionicons/ionicons.esm.js?ver=7.4.0`; // URL to your ESM file.
      script.defer = true; // Optional: Ensure it defers loading.

      // Append the script to the footer (just before the </body> tag in the iframe).
      iframeDocument.body.appendChild(script);
    }
  };

  waitForIframe(); // Start the iframe check process.
});
