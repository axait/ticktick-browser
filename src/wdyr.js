import React from 'react';
import whyDidYouRender from '@welldone-software/why-did-you-render';

whyDidYouRender(React, {
    trackAllPureComponents: true,
    logOnDifferentValues: true,  // It logs every re-render of tracked components — even the necessary ones — and shows you exactly what changed.
});


//FIXME: add the feature to enable WDYR on in development.
//FIXME: by import.meta.env.MODE==='development'
