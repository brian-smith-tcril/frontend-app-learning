import { PluginSlot } from '@openedx/frontend-plugin-framework';

import CourseOutlineTray from '../../courseware/course/sidebar/sidebars/course-outline/CourseOutlineTray';

const CourseOutlineSidebarSlot = () => (
  <PluginSlot
    id="course_outline_sidebar_slot"
    slotOptions={{
      mergeProps: true,
    }}
  >
    <>
      <CourseOutlineTray />
    </>
  </PluginSlot>
);

export default CourseOutlineSidebarSlot;
