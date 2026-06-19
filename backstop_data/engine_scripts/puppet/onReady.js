module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  await page.evaluate(() => {
    document
      .querySelectorAll('[data-backstop-hide]')
      .forEach((element) => element.remove());
  });

  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const root = document.documentElement;
    const lazyImages = Array.from(document.querySelectorAll('img[loading="lazy"]'));
    const allImages = Array.from(document.images);
    const previousScrollBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = 'auto';

    for (const image of lazyImages) {
      image.setAttribute('loading', 'eager');
      if (image.dataset && image.dataset.src && !image.getAttribute('src')) {
        image.setAttribute('src', image.dataset.src);
      }
    }

    window.scrollTo(0, 0);
    window.dispatchEvent(new Event('scroll'));
    await sleep(200);

    await Promise.all(
      allImages.map(
        (image) =>
          new Promise((resolve) => {
            if (image.complete) {
              resolve();
              return;
            }

            image.addEventListener('load', resolve, { once: true });
            image.addEventListener('error', resolve, { once: true });
          })
      )
    );

    document.querySelectorAll('[data-backstop-freeze]').forEach((element) => {
      const rect = element.getBoundingClientRect();
      element.style.position = 'absolute';
      element.style.top = `${rect.top + window.scrollY}px`;
      element.style.left = `${rect.left + window.scrollX}px`;
      element.style.width = `${rect.width}px`;
      element.style.right = 'auto';
      element.style.bottom = 'auto';
    });

    root.style.scrollBehavior = previousScrollBehavior;
    await sleep(250);
  });

  // add more ready handlers here...
};
