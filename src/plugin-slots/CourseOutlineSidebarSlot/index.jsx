import { PluginSlot } from '@openedx/frontend-plugin-framework';

import CourseOutlineTray from '../../courseware/course/sidebar/sidebars/course-outline/CourseOutlineTray';
import CourseOutlineTrigger from '../../courseware/course/sidebar/sidebars/course-outline/CourseOutlineTrigger';

const CourseOutlineSidebarSlot = () => (
  <PluginSlot
    id="course_outline_sidebar_slot"
    slotOptions={{
      mergeProps: true,
    }}
  >
    <>
      <CourseOutlineTrigger />
      <CourseOutlineTray />
    </>
  </PluginSlot>
);

export default CourseOutlineSidebarSlot;
