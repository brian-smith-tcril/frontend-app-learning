# Course Outline Sidebar Slot

### Slot ID: `course_outline_sidebar_slot`

## Description

This slot is used to replace/modify/hide the course outline sidebar.

## Example

The following `env.config.jsx` will replace the course outline sidebar entirely.

```js
import { DIRECT_PLUGIN, PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';

const config = {
  pluginSlots: {
    course_outline_sidebar_slot: {
      keepDefault: false,
      plugins: [
        {
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'custom_header_component',
            type: DIRECT_PLUGIN,
            RenderWidget: () => (
              <h1 style={{textAlign: 'center'}}>📊</h1>
            ),
          },
        },
      ]
    }
  },
}

export default config;
```
