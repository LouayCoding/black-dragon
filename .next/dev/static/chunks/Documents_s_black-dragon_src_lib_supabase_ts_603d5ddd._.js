(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/s/black-dragon/src/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addStudent",
    ()=>addStudent,
    "deleteStudent",
    ()=>deleteStudent,
    "getAttendanceStats",
    ()=>getAttendanceStats,
    "getOverduePayments",
    ()=>getOverduePayments,
    "getPrograms",
    ()=>getPrograms,
    "getRecentActivity",
    ()=>getRecentActivity,
    "getStudent",
    ()=>getStudent,
    "getStudents",
    ()=>getStudents,
    "getTodaysLessons",
    ()=>getTodaysLessons,
    "getUpcomingEvents",
    ()=>getUpcomingEvents,
    "supabase",
    ()=>supabase,
    "updateStudent",
    ()=>updateStudent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/s/black-dragon/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/s/black-dragon/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://zsibupsnbpnoxzjmnpcl.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzaWJ1cHNuYnBub3h6am1ucGNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc1NTkyMzUsImV4cCI6MjA4MzEzNTIzNX0.zmPow7RBtBqpGkEFITpOHH8rPD14XwpEoOl77nn-jXI");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
async function getStudents() {
    const { data, error } = await supabase.from('students').select('*').order('name', {
        ascending: true
    });
    if (error) {
        console.error('Error fetching students:', error);
        throw error;
    }
    return data || [];
}
async function getStudent(id) {
    const { data, error } = await supabase.from('students').select('*').eq('id', id).single();
    if (error) {
        console.error('Error fetching student:', error);
        return null;
    }
    return data;
}
async function addStudent(student) {
    const { data, error } = await supabase.from('students').insert([
        student
    ]).select().single();
    if (error) {
        console.error('Error adding student:', error);
        throw error;
    }
    return data;
}
async function updateStudent(id, updates) {
    const { data, error } = await supabase.from('students').update(updates).eq('id', id).select().single();
    if (error) {
        console.error('Error updating student:', error);
        throw error;
    }
    return data;
}
async function getOverduePayments() {
    const { data, error } = await supabase.from('payments').select('*, student:students(*)').eq('status', 'overdue').order('due_date', {
        ascending: true
    }).limit(10);
    if (error) {
        console.error('Error fetching overdue payments:', error);
        return [];
    }
    return data || [];
}
async function getTodaysLessons() {
    const today = new Date().getDay();
    const { data, error } = await supabase.from('lessons').select('*').eq('day_of_week', today).eq('is_active', true).order('start_time', {
        ascending: true
    });
    if (error) {
        console.error('Error fetching lessons:', error);
        return [];
    }
    return data || [];
}
async function getUpcomingEvents() {
    const today = new Date().toISOString().split('T')[0];
    const { data, error } = await supabase.from('events').select('*').gte('event_date', today).eq('is_active', true).order('event_date', {
        ascending: true
    }).limit(5);
    if (error) {
        console.error('Error fetching events:', error);
        return [];
    }
    return data || [];
}
async function getRecentActivity(limit = 10) {
    const { data, error } = await supabase.from('activity_logs').select('*').order('created_at', {
        ascending: false
    }).limit(limit);
    if (error) {
        console.error('Error fetching activity logs:', error);
        return [];
    }
    return data || [];
}
async function getAttendanceStats(startDate, endDate) {
    const { data, error } = await supabase.from('attendance').select('attendance_date, status').gte('attendance_date', startDate).lte('attendance_date', endDate);
    if (error) {
        console.error('Error fetching attendance stats:', error);
        return [];
    }
    // Group by date and calculate percentages
    const grouped = (data || []).reduce((acc, record)=>{
        const date = record.attendance_date;
        if (!acc[date]) {
            acc[date] = {
                present: 0,
                total: 0
            };
        }
        acc[date].total++;
        if (record.status === 'present') {
            acc[date].present++;
        }
        return acc;
    }, {});
    return Object.entries(grouped).map(([date, stats])=>({
            date,
            present: stats.present,
            total: stats.total
        }));
}
async function deleteStudent(id) {
    const { error } = await supabase.from('students').delete().eq('id', id);
    if (error) {
        console.error('Error deleting student:', error);
        return false;
    }
    return true;
}
async function getPrograms() {
    const { data, error } = await supabase.from('programs').select('*').eq('is_active', true).order('display_order', {
        ascending: true
    });
    if (error) {
        console.error('Error fetching programs:', error);
        return [];
    }
    return data || [];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_s_black-dragon_src_lib_supabase_ts_603d5ddd._.js.map