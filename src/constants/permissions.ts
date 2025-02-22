const general_permissions = Object.freeze({
    projects: {
        create: {
            name: "انشاء مشروع جديد",
            value: "projects.create"
        },
        read: {
            name: "قراءة المشاريع",
            value: "projects.read"
        },
        update: {
            name: "تحديث المشروع",
            value: "projects.update"
        },
        delete: {
            name: "حذف المشروع",
            value: "projects.delete"
        }
    },

    designs: {
        create: {
            name: "انشاء تصميم جديد",
            value: "designs.create"
        },
        read: {
            name: "قراءة التصميمات",
            value: "designs.read"
        },
        update: {
            name: "تحديث التصميم",
            value: "designs.update"
        },
        delete: {
            name: "حذف التصميم",
            value: "designs.delete"
        }
    },

    consultations: {
        read: {
            name: "قراءة الاستشارات",
            value: "consultations.read"
        },
        delete: {
            name: "حذف الاستشارة",
            value: "consultations.delete"
        },
        close: {
            name: "اغلاق الاستشارة",
            value: "consultations.close"
        }
    },

    contact_messages: {
        read: {
            name: "قراءة رسائل التواصل",
            value: "contact_messages.read"
        },
        delete: {
            name: "حذف رسالة التواصل",
            value: "contact_messages.delete"
        },
        close: {
            name: "اغلاق رسالة التواصل",
            value: "contact_messages.close"
        }
    },

    managers: {
        create: { name: "انشاء مدير جديد", value: "managers.create" },
        read: { name: "قراءة المديرين", value: "managers.read" },
        update: { name: "تحديث المدير", value: "managers.update" },
        delete: { name: "حذف المدير", value: "managers.delete" }
    },

    permissions: {
        add: {
            name: "Add Permission",
            value: "permissions.add"
        },
        remove: {
            name: "Remove Permission",
            value: "permissions.remove"
        }
    },

    statistics: {
        read: {
            name: "قراءة الاحصائات",
            value: "statistics.read"
        }
    },

    teams: {
        read: {
            name: "قراءة اعضاء الفريق",
            value: "teams.read"
        },

        create: {
            name: "اضافة عضو فريق",
            value: "teams.create"
        },

        update: {
            name: "تحديث عضو الفريق",
            value: "teams.update"
        },

        delete: {
            name: "حذف عضو الفريق",
            value: "teams.delete"
        }
    },

    achievements: {
        update: {
            name: "تحديث الأنجازات",
            value: "achievements.update"
        }
    }
})

export const full_access = {
    name: 'جميع الصلاحيات',
    value: '*'
}


const permissions = Object.freeze({general_permissions, full_access})


export default permissions