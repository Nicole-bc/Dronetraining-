// ==UserScript==
// @name DroneTrainingSystem English Local
// @namespace local
// @version 1.5.20260614
// @description Local pinned English display translation of DroneTrainingSystem for Bondage Club. No remote loader.
// @author zajucd; local English display build by OpenCode
// @license MIT
// @include /^https:\/\/(www\.)?bondageprojects\.elementfx\.com\/R\d+\/(BondageClub|\d+)\/(\d+\.html)?$/
// @include /^https:\/\/(www\.)?bondage-europe\.com\/R\d+\/(BondageClub|\d+)\/(\d+\.html)?$/
// @include /^https:\/\/(www\.)?bondageprojects\.com\/R\d+\/$/
// @grant none
// @run-at document-end
// ==/UserScript==
// This is a local pinned English translation. It does not auto-load remote code.
// Pinned source snapshot: retrieved 2026-06-14T17:11:56Z.
// Compatibility: hidden DTS protocol keys, command keys, stored data keys, Chinese voice triggers, and room-wide action text are retained.
// English local display layer. Keeps DTS protocol, stored data, Chinese room commands, and room-wide action text compatible.
const DTS_EN_LOCAL_EXACT_REPLACEMENTS = new Map([
    ["关", "Off"],
    ["开", "On"],
    ["弱", "Low"],
    ["强", "High"],
    ["或", "or"],
    ["无人机", "Drone"],
    ["操作员", "Operator"],
    ["游客", "Visitor"],
    ["本机", "This unit"],
    ["素体", "body"],
    ["人类", "Human"],
    ["服从", "Obey"],
    ["寻找自我", "Seek selfhood"],
    ["感到兴奋", "Feel aroused"],
    ["无动于衷", "Feel nothing"],
    ["忍耐", "Resist"],
    ["放纵", "Indulge"],
    ["愧疚", "Guilt"],
    ["爽", "Pleasure"],
    ["货物", "Cargo"],
    ["充电", "Charging"],
    ["是", "Yes"],
    ["否", "No"]
]);

const DTS_EN_LOCAL_REPLACEMENTS = [
    ["更新日志", "Changelog"],
    ["无人机训练系统", "Drone Training System"],
    ["与无人机训练系统的链接已建立，", "Link to Drone Training System established, "],
    ["可用功能", "Available actions"],
    ["显示状态", "Show status"],
    ["基础信息", "Basic Info"],
    ["生理信息", "Physiology"],
    ["装置信息", "Device Info"],
    ["机能信息", "Function Info"],
    ["可用程序", "Available Programs"],
    ["无人机ID", "Drone ID"],
    ["无人机型号", "Drone model"],
    ["操作员ID", "Operator ID"],
    ["操作员权限等级", "Operator permission level"],
    ["游客ID", "Visitor ID"],
    ["无操作员", "No operator"],
    ["系统版本", "System version"],
    ["配额点数", "quota points"],
    ["剩余电量", "Remaining battery"],
    ["心率", "Heart rate"],
    ["体温", "Temperature"],
    ["发情状态", "Arousal state"],
    ["发情中", "Aroused"],
    ["未发情", "Not aroused"],
    ["当前快感", "Current arousal"],
    ["快感装置", "Pleasure device"],
    ["高潮限制", "Orgasm limit"],
    ["眼部拘束", "Eye restraint"],
    ["耳部拘束", "Ear restraint"],
    ["口腔拘束", "Mouth restraint"],
    ["手臂拘束", "Arm restraint"],
    ["腿脚拘束", "Leg/foot restraint"],
    ["眼部机能", "Eye function"],
    ["耳部机能", "Ear function"],
    ["口腔机能", "Mouth function"],
    ["手臂机能", "Arm function"],
    ["腿脚机能", "Leg/foot function"],
    ["关闭", "Off"],
    ["开启", "On"],
    ["打开", "Open"],
    ["激活", "Active"],
    ["最大", "Maximum"],
    ["可用", "Available"],
    ["限制", "Limited"],
    ["离线", "Offline"],
    ["拘束", "Restraint"],
    ["机能", "Function"],
    ["眼部", "Eyes"],
    ["耳部", "Ears"],
    ["口腔", "Mouth"],
    ["快感", "Pleasure"],
    ["手臂", "Arms"],
    ["腿脚", "Legs/feet"],
    ["本机可用功能", "This unit's available actions"],
    ["操作员可用功能", "Operator available actions"],
    ["游客可用功能", "Visitor available actions"],
    ["对该单位可用功能", "Available actions for this unit"],
    ["显示本机状态", "Show this unit's status"],
    ["显示操作员状态", "Show operator status"],
    ["显示自身状态", "Show own status"],
    ["查找单位状态", "Find unit status"],
    ["显示携带道具", "Show carried items"],
    ["显示任务进度", "Show mission progress"],
    ["发送充电求助", "Send charging help request"],
    ["移动至训练设施", "Move to training facility"],
    ["呼叫救援脱困", "Call rescue / unstuck"],
    ["再次显示该界面", "Show this panel again"],
    ["注销操作员身份", "Unregister operator identity"],
    ["注册成为无人机", "Register as drone"],
    ["注册成为操作员", "Register as operator"],
    ["显示单位状态", "Show unit status"],
    ["发送任务求助", "Send mission help request"],
    ["分享电量", "Share battery"],
    ["显示语音指令", "Show voice commands"],
    ["电击惩罚", "Shock punishment"],
    ["高潮奖励", "Orgasm reward"],
    ["设置任务", "Set mission"],
    ["接入充电装置", "Connect charger"],
    ["手摇曲柄充电", "Hand-crank charging"],
    ["设置显示屏发言", "Set display speech"],
    ["要求控制权限", "Request control permission"],
    ["清除控制权限", "Clear control permission"],
    ["废弃该无人机", "Discard this drone"],
    ["开发中", "In development"],
    ["服从指令:被操作员摸头时，会切换至服从姿态", "Obedience command: when an operator pats the head, switch to obedience pose"],
    ["复位指令:被操作员捏脸颊时，会进行姿态复位", "Reset command: when an operator pinches the cheek, reset posture"],
    ["自检指令:被操作员抚摸小腹/肚子时，会进行自检流程", "Self-check command: when an operator caresses the lower abdomen/belly, perform self-check"],
    ["待机指令:被操作员捏小腹/肚子时，会切换至待机姿态", "Standby command: when an operator pinches the lower abdomen/belly, switch to standby pose"],
    ["侍奉指令:操作员摇晃需侍奉的身体部位时，会用口塞亲吻操作员对应部位", "Service command: when an operator wiggles the body part to be served, kiss that part with the mouth plug"],
    ["奖励程序:被摸头时，有概率会引发高潮", "Reward program: being patted on the head has a chance to trigger orgasm"],
    ["愧疚程序:未能忍耐高潮时，随机部位拘束上升1", "Guilt program: failing to resist orgasm raises a random restraint by 1"],
    ["道具列表：", "Item list:"],
    ["任务列表：", "Mission list:"],
    ["未找到目标", "Target not found"],
    ["参数错误", "Invalid parameter"],
    ["目标已丢失", "Target lost"],
    ["与目标距离过远", "Target is too far away"],
    ["已发送任务协助请求", "Mission help request sent"],
    ["已发送任务设置指令", "Mission assignment command sent"],
    ["已发送设置指令", "Set command sent"],
    ["已发送指令", "Command sent"],
    ["已发送改造命令", "Upgrade command sent"],
    ["位于训练设施中，无需移动", "Already in the training facility; no movement needed"],
    ["已到达训练设施", "Arrived at the training facility"],
    ["未找到可用房间", "No available room found"],
    ["是否将当前房间更新为训练设施（当前房间所有设置会丢失）", "Update the current room into the training facility? All current room settings will be lost"],
    ["无人机呼叫救援需要20信用配额，不足20会扣至负数，", "Drone rescue costs 20 credit quota. If you have less than 20, it will go negative. "],
    ["呼叫救援需要5信用配额，不足5会扣至负数，", "Rescue costs 5 credit quota. If you have less than 5, it will go negative. "],
    ["每日接取任务次数已满，无法接取", "Daily mission limit reached; cannot take another"],
    ["已接取任务已满，无法接取", "Mission slots full; cannot take another"],
    ["已接取任务：", "Mission accepted: "],
    ["已完成电量分享", "Battery sharing complete"],
    ["已完成充电", "Charging complete"],
    ["个人信息终端无需充电，但已将充电宝内电量作为备用能源补充", "The personal terminal does not need charging, but the power bank has been stored as backup energy"],
    ["无人机不允许使用该道具，执行惩罚并没收道具", "Drones are not allowed to use this item; executing punishment and confiscating item"],
    ["房间内有人，无法使用", "Room occupied; cannot use"],
    ["未在指定时间内完成动作，执行惩罚", "Action not completed within the time limit; executing punishment"],
    ["执行强制高潮", "Executing forced orgasm"],
    ["未找到可用电击设备，惩罚失败", "No usable shock device found; punishment failed"],
    ["未找到可用震动设备，设置失败", "No usable vibration device found; setting failed"],
    ["震动装置强度设为", "Vibration device intensity set to "],
    ["当前电量低于20%，进入节电模式", "current battery is below 20%; entering power-saving mode"],
    ["当前电量高于20%，解除节电模式", "current battery is above 20%; leaving power-saving mode"],
    ["当前电量低于0%，停用维生机能外所有机能", "current battery is below 0%; disabling all non-life-support functions"],
    ["当前电量高于0%，启用因电量耗尽停用的机能", "current battery is above 0%; re-enabling functions disabled by battery depletion"],
    ["无人机当前电量低于20%，进入节电模式", "Drone battery is below 20%; entering power-saving mode"],
    ["无人机当前电量高于20%，解除节电模式", "Drone battery is above 20%; leaving power-saving mode"],
    ["无人机当前电量低于0%，停用维生机能外所有机能", "Drone battery is below 0%; disabling all non-life-support functions"],
    ["无人机当前电量高于0%，启用因电量耗尽停用的机能", "Drone battery is above 0%; re-enabling functions disabled by battery depletion"],
    ["每日登录奖励5配额点数", "Daily login reward: 5 quota points"],
    ["每日登录奖励30配额点数", "Daily login reward: 30 quota points"],
    ["电量不足，可向附近玩家", "Battery low. You can ask nearby players for "],
    ["求助", "help"],
    ["执行惩罚:", "Executing punishment: "],
    ["级电击", " shock level "],
    ["次", " times"],
    ["任务:", "Mission: "],
    [" 完成，奖励", " complete, reward "],
    ["运送货物", "Transport cargo"],
    ["高潮任务", "Orgasm mission"],
    ["忍耐高潮任务", "Orgasm-resistance mission"],
    ["被打屁股任务", "Receive-spanking mission"],
    ["打屁股任务", "Spanking mission"],
    ["被摸头任务", "Receive-head-pat mission"],
    ["摸头任务", "Head-pat mission"],
    ["充电桩任务", "Charging-station mission"],
    ["高潮五次", "Orgasm five times"],
    ["忍耐高潮三次", "Resist orgasm three times"],
    ["被管理员或游客打屁股三次", "Be spanked by an admin or visitor three times"],
    ["打无人机的屁股三次", "Spank a drone three times"],
    ["被管理员或游客摸头三次", "Be patted on the head by an admin or visitor three times"],
    ["摸无人机的头三次", "Pat a drone's head three times"],
    ["使用充电桩一次", "Use a charging station once"],
    ["一次性充电宝，补充无人机50%的电量，记得在电量耗尽前使用", "Disposable power bank: restores 50% drone battery. Use before battery is depleted"],
    ["一次性充电宝", "Disposable power bank"],
    ["拘束减缓芯片，将一个部位的拘束等级下调一级", "Restraint easing chip: lowers one part's restraint level by 1"],
    ["拘束减缓芯片", "Restraint easing chip"],
    ["拘束收紧芯片，将一个部位的拘束等级上调一级", "Restraint tightening chip: raises one part's restraint level by 1"],
    ["拘束收紧芯片", "Restraint tightening chip"],
    ["机能恢复芯片，将一个部位的机能限制下调一级", "Function restoration chip: lowers one part's function restriction by 1"],
    ["机能恢复芯片", "Function restoration chip"],
    ["机能限制芯片，将一个部位的机能限制提升一级", "Function restriction chip: raises one part's function restriction by 1"],
    ["机能限制芯片", "Function restriction chip"],
    ["震动控制器，可以调整震动玩具的强度", "Vibration controller: adjusts vibrator intensity"],
    ["震动控制器", "Vibration controller"],
    ["高潮限制器，可以调整高潮限制的等级", "Orgasm limiter: adjusts orgasm restriction level"],
    ["高潮限制器", "Orgasm limiter"],
    ["显示器开关，可以调整是否使用显示器发言", "Display switch: toggles speaking through the display"],
    ["显示器开关", "Display switch"],
    ["私人房间房卡，可以传送至私人房间内，可在房间内呼叫无人机侍寝（记得提前记住无人机的id）", "Private-room keycard: teleports to a private room and can call a drone there. Remember the drone ID first"],
    ["私人房间房卡", "Private-room keycard"],
    ["可被设为", " can be set to "],
    ["通过本机的高潮为电源补充了一定能量", "This unit's orgasm restored some power"],
    ["通过附近个体的高潮为电源补充了少许能量", "A nearby individual's orgasm restored a little power"],
    ["已进入仓库区，可在柜子处", "Entered warehouse area. At cabinets you can "],
    ["不位于仓库区", "Not in the warehouse area"],
    ["手臂与腿脚同时不可用，尝试呼叫调度系统代替操作", "Arms and legs/feet unavailable; trying to call dispatch system to operate instead"],
    ["手臂不可用，尝试调整姿态通过腿脚进行操作", "Arms unavailable; trying to adjust posture and operate with legs/feet"],
    ["拿取成功，货物编号", "Pickup successful, cargo ID "],
    ["储存单元已满，拿取失败", "Storage unit full; pickup failed"],
    ["放置成功", "Placement successful"],
    ["未携带应放置至此的货物", "You are not carrying cargo that belongs here"],
    ["无人机进入设施电梯，即将转移至待命区", "Drone entered facility elevator; transferring to standby area"],
    ["操作员进入设施电梯，即将转移至设施主要区域", "Operator entered facility elevator; transferring to main facility area"],
    ["操作员进入设施电梯，即将转移至设施入口", "Operator entered facility elevator; transferring to facility entrance"],
    ["游客不具备进入设施权限，请注册为无人机或操作员后再尝试进入", "Visitors do not have facility access. Register as a drone or operator and try again"],
    ["无人机无权使用操作员电梯，执行惩罚", "Drones may not use the operator elevator; executing punishment"],
    ["操作员请使用南方操作员专用电梯", "Operators should use the southern operator elevator"],
    ["收容仓部署完毕", "Containment pod deployed"],
    ["已移动至待命区，开始等待系统呼叫", "Moved to standby area; waiting for system call"],
    ["收到系统呼叫，即将移动至设施主要区域", "System call received; moving to main facility area"],
    ["收到系统呼叫，即将移动至设施设施入口", "System call received; moving to facility entrance"],
    ["已进入无人机休眠区，可内侧软垫处", "Entered drone sleep area. On the inner pads you can "],
    ["以获取配额点数", " to gain quota points"],
    ["不位于软垫上", "Not on a pad"],
    ["休眠仓部署完成，即将转移至待命区开始休眠", "Sleep pod deployed; moving to standby area to begin sleep"],
    ["休眠完成，即将移动至设施主要区域", "Sleep complete; moving to main facility area"],
    ["已进入改造工坊，", "Entered upgrade workshop, "],
    ["植入隐形眼镜显示器", "Implant contact-lens display"],
    ["植入耳道填充物", "Implant ear-canal filler"],
    ["植入颌骨控制电机", "Implant jaw-control motor"],
    ["植入肩肘控制电机", "Implant shoulder/elbow control motor"],
    ["植入膝踝控制电机", "Implant knee/ankle control motor"],
    ["系统升级至1.0版本", "System upgrade to version 1.0"],
    ["系统升级至2.0版本", "System upgrade to version 2.0"],
    ["刷入下一版本系统固件，解锁更多功能", "Flash next system firmware version and unlock more functions"],
    ["更换人工电子眼球", "Replace with artificial electronic eyeballs"],
    ["植入耳蜗减震器", "Implant cochlear damper"],
    ["植入声带控制装置", "Implant vocal-cord control device"],
    ["植入手部控制电机", "Implant hand-control motor"],
    ["植入胯部控制电机", "Implant hip-control motor"],
    ["加装膀胱内额外电源", "Install extra bladder power supply"],
    ["加装肠道内额外电源", "Install extra intestinal power supply"],
    ["储存单元高级扩张", "Advanced storage-unit expansion"],
    ["储存单元扩张", "Storage-unit expansion"],
    ["记忆单元高级扩张", "Advanced memory-unit expansion"],
    ["记忆单元扩张", "Memory-unit expansion"],
    ["进一步升级高潮充能元件", "Further upgrade orgasm-charging component"],
    ["升级高潮充能元件", "Upgrade orgasm-charging component"],
    ["更换高性能显示屏", "Install high-performance display"],
    ["更换顶级显示屏", "Install top-tier display"],
    ["增加50%的续航时间", "Increase endurance by 50%"],
    ["增加66%的续航时间", "Increase endurance by 66%"],
    ["增加一个道具栏上限", "Increase item slot limit by one"],
    ["增加一个任务栏上限与每日可完成任务上限", "Increase mission slot limit and daily mission limit by one"],
    ["增加100%的高潮获得电量", "Increase battery gained from orgasm by 100%"],
    ["增加50%的高潮获得电量", "Increase battery gained from orgasm by 50%"],
    ["降低显示屏发言的消耗", "Reduce display-speech cost"],
    ["进一步降低显示屏发言的消耗", "Further reduce display-speech cost"],
    ["改造效果：", "Upgrade effect: "],
    ["所需配额点数：", "Required quota points: "],
    ["对该无人机", "For this drone: "],
    ["目标无人机", "target drone"],
    ["不具有对该无人机的操作权限", "You do not have permission to operate this drone"],
    ["进入左方房间内改造舱以开始改造", "Enter the upgrade pod in the left room to start upgrading"],
    ["可用改造如下：", "Available upgrades:"],
    ["非无人机不可进行改造", "Only drones can be upgraded"],
    ["未选择改造", "No upgrade selected"],
    ["已选择改造不可用", "Selected upgrade is unavailable"],
    ["配额点数不足无法进行改造", "Not enough quota points to upgrade"],
    ["配额点数不足无法进行改造，执行惩罚", "Not enough quota points to upgrade; executing punishment"],
    ["无人机已进入改造舱，关闭改造舱舱门，开始进行改造", "Drone entered upgrade pod. Closing pod door and starting upgrade"],
    ["改造已完成，打开改造舱舱门", "Upgrade complete. Opening pod door"],
    ["已进入商店，进入内侧房间以进行购物", "Entered shop. Move into the inner room to shop"],
    ["可购买道具：", "Purchasable items:"],
    ["价格：", " Price: "],
    ["配额点数不足，无法购买", "Not enough quota points; cannot buy"],
    ["储存单元已满，无法购买", "Storage unit full; cannot buy"],
    ["购买成功", "Purchase successful"],
    ["已进入办公室，进入内侧工位以进行工作", "Entered office. Move to an inner workstation to work"],
    ["答案正确，获得", "Correct answer. Gained "],
    ["，已达到每日上限", ", daily limit reached"],
    ["答案错误", "Wrong answer"],
    ["休眠至:", "Sleeping until:"],
    ["已进入操作员休息室", "Entered operator lounge"],
    ["这是猫", "This is a cat"],
    ["已进入私人房间，", "Entered private room, "],
    ["已进入私人房间", "Entered private room"],
    ["请在方括号内输入目标ID并发送指令", "Enter the target ID inside the brackets and send the command"],
    ["请在方括号内输入目标ID并发送指令，或触摸目标项圈(包括自身)", "Enter the target ID inside the brackets and send the command, or touch the target collar (including yourself)"],
    ["请在方括号内输入目标ID并发送指令以获取目标无人机的可用改造", "Enter the target ID inside the brackets and send the command to get the target drone's available upgrades"],
    ["触摸目标项圈(包括自身)", "touch the target collar (including yourself)"],
    ["已进入训练室，站在黑色地砖上", "Entered training room. Stand on a black tile and "],
    ["训练完成前不允许离开训练室", "You may not leave the training room before training completes"],
    ["基础训练开始", "Basic training started"],
    ["进阶训练开始", "Advanced training started"],
    ["第一项训练，服从训练", "Training 1: obedience training"],
    ["第二项训练，复位训练", "Training 2: reset training"],
    ["第三项训练，自检训练", "Training 3: self-check training"],
    ["第一项训练，待机训练", "Training 1: standby training"],
    ["第二项训练，侍奉训练", "Training 2: service training"],
    ["进入实践阶段", "Entering practice phase"],
    ["被抚摸头顶", "Head being patted"],
    ["被捏脸颊", "Cheek being pinched"],
    ["被抚摸小腹", "Lower abdomen being caressed"],
    ["被捏小腹", "Lower abdomen being pinched"],
    ["摇晃脚", "Wiggle foot"],
    ["摇晃手指", "Wiggle fingers"],
    ["未检测到下跪行为，退回至上一步", "Kneeling not detected; returning to previous step"],
    ["未检测到站起行为，退回至上一步", "Standing up not detected; returning to previous step"],
    ["未检测到自检行为，退回至上一步", "Self-check not detected; returning to previous step"],
    ["未检测到待机行为，退回至上一步", "Standby behavior not detected; returning to previous step"],
    ["未检测到侍奉行为，退回至上一步", "Service behavior not detected; returning to previous step"],
    ["检测到侍奉行为，进行下一实践", "Service behavior detected; moving to next practice"],
    ["第三项训练完成，基础训练全部完成", "Training 3 complete; basic training fully complete"],
    ["第二项训练完成，进阶训练全部完成", "Training 2 complete; advanced training fully complete"],
    ["多次重试失败，训练中止", "Multiple retries failed; training aborted"],
    ["不位于黑色地砖上", "Not on a black tile"],
    ["受训者非无人机，执行基础训练", "Trainee is not a drone; running basic training"],
    ["已进入教育室，", "Entered education room, "],
    ["基础教育开始", "Basic education started"],
    ["进阶教育开始", "Advanced education started"],
    ["无人机应在被操作员抚摸头顶时，执行服从指令，应立即下跪，切换至服从姿态，限时20秒", "When an operator pats the head, the drone should execute the obedience command: kneel immediately and switch to obedience pose. Time limit: 20 seconds"],
    ["无人机应在被操作员捏脸颊时，执行复位指令，应立即站起并将手放在身前，完成姿态复位，限时20秒", "When an operator pinches the cheek, the drone should execute the reset command: stand immediately and place hands in front to reset posture. Time limit: 20 seconds"],
    ["无人机应在被操作员抚摸小腹/肚子时，执行自检指令，应立即抚摸自身任意部位三次，以完成自检流程，限时20秒", "When an operator caresses the lower abdomen/belly, the drone should execute the self-check command: touch any part of itself three times. Time limit: 20 seconds"],
    ["无人机应在被操作员捏小腹/肚子时，执行待机指令，应立即双手背后且双腿并拢，切换至待机姿态，限时20秒", "When an operator pinches the lower abdomen/belly, the drone should execute the standby command: put hands behind the back, close legs, and switch to standby pose. Time limit: 20 seconds"],
    ["无人机应在附近的操作员摇晃自己身体的任意部位时时，执行侍奉指令，应用口塞亲吻对应部位，以完成侍奉流程，限时20秒，检测范围3*3格", "When a nearby operator wiggles any body part, the drone should execute the service command: kiss the corresponding part with its mouth plug. Time limit: 20 seconds. Detection range: 3x3 tiles"],
    ["在本次训练中，以摇晃对应部位代替用口塞亲吻", "In this training, wiggling the corresponding part substitutes for kissing with the mouth plug"],
    ["实际环境中收到指令时不会显示进度条提示，需以接收到的动作为准", "In real use, no progress bar is shown when a command is received; follow the received action instead"],
    ["催眠装置部署完成，开始催眠", "Hypnosis device deployed; starting hypnosis"],
    ["催眠流程完成，奖励程序已成功安装", "Hypnosis sequence complete; reward program installed"],
    ["催眠流程完成，愧疚程序已成功安装", "Hypnosis sequence complete; guilt program installed"],
    ["被抚摸头顶时，有概率会引发高潮", "When head is patted, there is a chance to trigger orgasm"],
    ["未能忍耐高潮时，随机部位拘束上升1", "When failing to resist orgasm, a random restraint level increases by 1"],
    ["我的身份是", "My identity is "],
    ["我的存在意义是", "My purpose is "],
    ["主人摸我的头时，我应该", "When my owner pats my head, I should "],
    ["本机的身份是", "This unit's identity is "],
    ["本机的名字是", "This unit's name is "],
    ["本机的即将高潮时，本机应当", "When this unit is about to orgasm, this unit should "],
    ["若本机意外高潮时，本机应感到", "If this unit orgasms accidentally, this unit should feel "],
    ["受训者非无人机，执行基础教育", "Student is not a drone; running basic education"],
    ["位于充电桩上，", "On a charging station, "],
    ["即将接受无人机化改造，点击按钮以", "About to accept drone conversion. Click: "],
    ["即将注册为操作员，点击按钮以", "About to register as an operator. Click: "],
    ["即将注销操作员身份，点击按钮以", "About to unregister operator identity. Click: "],
    ["即将向其要求控制权限，点击按钮以", "About to request control permission from them. Click: "],
    ["即将清除对其的控制权限，点击按钮以", "About to clear control permission over them. Click: "],
    ["无人机无权注销自身身份，执行惩罚", "Drones may not unregister their own identity; executing punishment"],
    ["无人机无权自主更改操作员，执行惩罚", "Drones may not change operator autonomously; executing punishment"],
    ["当前无人机该部位未接受改造，无法设置为指定状态", "This drone has not received the upgrade for that part and cannot be set to the specified state"],
    ["接收来自素体到无人机注册请求，开始无人机化改造流程", "Received body-to-drone registration request. Starting drone conversion sequence"],
    ["开始部署改造单元", "Starting upgrade-unit deployment"],
    ["改造单元部署完成，素体收容完成", "Upgrade unit deployed; body containment complete"],
    ["开始喷射溶解液", "Starting solvent spray"],
    ["素体服装与拘束溶解完成", "Body clothing and restraints dissolved"],
    ["开始拘束素体", "Starting body restraint"],
    ["素体拘束完成", "Body restraint complete"],
    ["开始喷涂乳胶涂层", "Starting latex coating"],
    ["乳胶涂层喷涂完成", "Latex coating complete"],
    ["开始安装总电源", "Starting main power supply installation"],
    ["无法顺利安装总电源，推测原因:紧张情绪导致的素体骨骼肌异常震颤与阴道不通畅", "Main power supply installation failed. Estimated cause: anxiety-induced body skeletal-muscle tremors and vaginal obstruction"],
    ["开始安装体态控制装置", "Starting posture-control device installation"],
    ["体态控制装置已植入素体肩部、背部、腹部，安装完成", "Posture-control device implanted in the body's shoulders, back, and abdomen. Installation complete"],
    ["体态控制装置通过外接电源启动，主动抑制素体骨骼肌震颤", "Posture-control device started on external power, actively suppressing body skeletal-muscle tremors"],
    ["开始安装总电源,向阴道内插入总电源安装管", "Starting main power supply installation: inserting installation tube into the vagina"],
    ["阴道扩张顺畅，进一步插入总电源安装管", "Vaginal dilation smooth; inserting the main power installation tube further"],
    ["总电源安装管已到达子宫口，开始向子宫内置入总电源", "Main power installation tube reached the cervix. Starting insertion of main power supply into the uterus"],
    ["总电源置入成功，开始向总电源内注入电池液", "Main power supply inserted successfully. Starting battery-fluid injection"],
    ["注入顺畅，总电源膨胀率增长良好", "Injection smooth; main power supply expansion rate increasing normally"],
    ["检测到总电源膨胀受阻，推测原因:总电源已膨胀至填满子宫", "Main power supply expansion obstruction detected. Estimated cause: it has expanded to fill the uterus"],
    ["加大电池液注入压强，总电源膨胀率增长缓慢", "Increasing battery-fluid injection pressure; main power supply expansion rate is slow"],
    ["电池液注入完毕，总电源已达到最大膨胀，封闭总电源注入口，接入电源接口", "Battery-fluid injection complete. Main power supply fully expanded; sealing injection port and connecting power interface"],
    ["总电源安装管退出，电源接口已膨胀至填充全部阴道，总电源安装完成，进行高潮充能测试", "Main power installation tube withdrawn. Power interface expanded to fill the vagina. Main power installation complete; starting orgasm-charging test"],
    ["总电源电量填充成功，高潮充能测试完成", "Main power supply charged successfully. Orgasm-charging test complete"],
    ["开始安装内循环系统控制装置", "Starting internal-cycle control device installation"],
    ["内循环系统控制装置已植入素体乳头、阴蒂、肛门，安装完成", "Internal-cycle control device implanted in the body's nipples, clitoris, and anus. Installation complete"],
    ["开始安装内循环系统控制装置总控系统与生理信息监控装置", "Starting internal-cycle master control system and physiological monitor installation"],
    ["总控系统已植入素体小腹，安装完成，生理信息监控装置已植入素体胸口，安装完成，进行功能测试", "Master control system implanted in the lower abdomen. Physiological monitor implanted in the chest. Starting function test"],
    ["内循环系统控制装置启动，震动功能良好，生理信息监控装置已检测到体温与心率的上升，监测功能良好", "Internal-cycle control device started; vibration function normal. Physiological monitor detected increased temperature and heart rate; monitoring function normal"],
    ["开始安装运动控制装置", "Starting motion-control device installation"],
    ["运动控制装置已植入素体手部、臂部、腿部、脚踝、足部，安装完成", "Motion-control device implanted in the body's hands, arms, legs, ankles, and feet. Installation complete"],
    ["开始个体识别装置", "Starting individual-identification device installation"],
    ["个体识别装置已植入面部，安装完成，开始在个体识别装置上印刷无人机ID", "Individual-identification device implanted in the face. Printing drone ID on the device"],
    ["检测到素体异常动作，推测原因:素体缺氧导致的恐慌", "Abnormal body movement detected. Estimated cause: panic from body hypoxia"],
    ["启动运动控制装置，主动抑制素体异常动作", "Starting motion-control device to suppress abnormal body movement"],
    ["开始在个体识别装置上安装视觉、听觉、消化、呼吸系统外部接口", "Starting installation of visual, auditory, digestive, and respiratory external interfaces on the identification device"],
    ["外部接口安装完成，素体异常动作缓和", "External interface installation complete; abnormal body movement eased"],
    ["开始安装显示器与信号接收器", "Starting display and signal receiver installation"],
    ["显示器安装完成，信号接收器安装完成", "Display installation complete; signal receiver installation complete"],
    ["所有装置安装完成，无人机注册完成，开始无人机教育程序", "All devices installed. Drone registration complete; starting drone education program"],
    ["无人机教育程序完成，无人机化改造流程已全部完成，放出无人机", "Drone education program complete. Drone conversion sequence fully complete; releasing drone"],
    ["正在部署", "Deploying"],
    ["部署完成", "Deployment complete"],
    ["正在喷射", "Spraying"],
    ["喷射完成", "Spray complete"],
    ["正在拘束", "Restraining"],
    ["拘束完成", "Restraint complete"],
    ["正在喷涂", "Coating"],
    ["喷涂完成", "Coating complete"],
    ["正在安装", "Installing"],
    ["安装完成", "Installation complete"],
    ["安装失败", "Installation failed"],
    ["正在启动", "Starting"],
    ["启动完成", "Startup complete"],
    ["正在置入", "Inserting"],
    ["置入完成", "Insertion complete"],
    ["正在注入", "Injecting"],
    ["注入异常", "Injection abnormal"],
    ["注入完成", "Injection complete"],
    ["正在改造", "Upgrading"],
    ["改造完成", "Upgrade complete"],
    ["正在充电", "Charging"],
    ["充电完成", "Charging complete"],
    ["呼叫中", "Calling"],
    ["调整中", "Adjusting"],
    ["等待中", "Waiting"],
    ["已呼叫", "Called"],
    ["已完成", "Complete"],
    ["结束", "End"],
    ["执行", "Run"],
    ["调整", "Adjust"],
    ["使用", "Use"],
    ["丢弃", "Drop"],
    ["确认", "Confirm"],
    ["同意", "Accept"],
    ["拿起", "Pick up"],
    ["放下", "Put down"],
    ["休眠", "Sleep"],
    ["开始休眠", "Start sleep"],
    ["显示可用改造", "Show available upgrades"],
    ["选择", "Select"],
    ["执行改造", "Apply upgrade"],
    ["购买", "Buy"],
    ["接取任务", "Take mission"],
    ["处理杂务", "Do office work"],
    ["呼叫无人机侍寝", "Call drone to private room"],
    ["移动至指定位置", "Move to specified location"],
    ["移动至其所在房间", "Move to their room"],
    ["开始训练", "Start training"],
    ["开始教育", "Start education"],
    ["开始充电", "Start charging"],
    ["寸止", "Edging"],
    ["禁止", "Blocked"],
    ["设为", "Set to "]
];

const DTS_EN_LOCAL_ITEM_REPLACEMENTS = [
    ["无人机体态控制装置", "Drone posture-control device"],
    ["植入素体的肩部、背部、腹部，通过高扭力舵机控制无人机的体态，以防出现动作失误", "Implanted into the body's shoulders, back, and abdomen; high-torque servos control drone posture to prevent movement errors"],
    ["无人机总电源与无人机电源接口", "Drone main power supply and power interface"],
    ["无人机总电源植入素体子宫内，供应无人机的基础活动，无人机电源接口从阴道伸至体外，可以接受来自外部充电也可通过高潮充电", "The drone main power supply supports basic activity; the external power interface can receive external charging or orgasm-based charging"],
    ["无人机内循环系统控制装置中枢", "Drone internal-cycle control hub"],
    ["植入素体的小腹，对所有内循环系统控制装置进行控制调节，同时搭载对素体的高潮机能进行限制的功能", "Implanted in the lower abdomen; controls all internal-cycle devices and includes orgasm-function restriction"],
    ["无人机内循环系统控制装置", "Drone internal-cycle control device"],
    ["植入素体的乳头内，通过物理震动引发性唤起以进行激素调节", "Implanted in the nipples; uses physical vibration to induce arousal for hormone regulation"],
    ["植入素体的肛门内，通过物理震动引发性唤起以进行激素调节", "Implanted in the anus; uses physical vibration to induce arousal for hormone regulation"],
    ["植入素体的阴蒂内，通过物理震动引发性唤起以进行激素调节", "Implanted in the clitoris; uses physical vibration to induce arousal for hormone regulation"],
    ["无人机惩罚装置", "Drone punishment device"],
    ["植入素体的乳头内，通过电流对无人机的失误行为进行惩罚", "Implanted in the nipples; uses electric current to punish drone errors"],
    ["植入素体的颈部，通过电流对无人机的失误行为进行惩罚", "Implanted at the neck; uses electric current to punish drone errors"],
    ["无人机生理信息监控装置", "Drone physiological monitor"],
    ["植入素体的胸口，检测体温、心率、性唤起程度以进行生理状态调节", "Implanted in the chest; monitors temperature, heart rate, and arousal for physiological regulation"],
    ["无人机运动控制装置", "Drone motion-control device"],
    ["接入素体的脚踝，使其无法进行未授权的运动，同时也能在必要时进行运动辅助", "Connected to the ankles; prevents unauthorized movement and can assist movement when needed"],
    ["接入素体的腿部，使其无法进行未授权的运动，同时也能在必要时进行运动辅助", "Connected to the legs; prevents unauthorized movement and can assist movement when needed"],
    ["接入素体的手部，使其无法进行未授权的运动，同时也能在必要时进行运动辅助", "Connected to the hands; prevents unauthorized movement and can assist movement when needed"],
    ["接入素体的足部，使其无法进行未授权的运动，同时也能在必要时进行运动辅助", "Connected to the feet; prevents unauthorized movement and can assist movement when needed"],
    ["接入素体的臂部，使其无法进行未授权的运动，同时也能在必要时进行运动辅助", "Connected to the arms; prevents unauthorized movement and can assist movement when needed"],
    ["无人机个体识别装置", "Drone individual-identification device"],
    ["植入素体的面部，禁用了素体原有的面部个体识别机能，转为通过条形码进行个体识别", "Implanted on the face; disables the body's original facial identification and uses a barcode instead"],
    ["无人机消化系统外部接口", "Drone digestive-system external interface"],
    ["接入素体的口腔，联通消化系统，使其可以接受无人机用营养块，同时也可作为性器使用", "Connected to the mouth and digestive system; allows drone nutrition blocks and can be used sexually"],
    ["无人机视觉系统外部接口", "Drone visual-system external interface"],
    ["接入素体的面部，链接视觉系统，使其可以直接接收来自系统的指令，同时也可屏蔽多余的视觉信息", "Connected to the face and visual system; receives system instructions directly and can block excess visual information"],
    ["无人机呼吸系统外部接口", "Drone respiratory-system external interface"],
    ["接入素体的鼻腔，链接呼吸系统，使其仅可呼吸无人机用含药物气体，同时也封闭会厌软骨防止口部呼吸", "Connected to the nasal cavity and respiratory system; limits breathing to medicated drone gas and blocks mouth breathing"],
    ["无人机听觉系统外部接口", "Drone auditory-system external interface"],
    ["接入素体的耳部，链接听觉系统，使其时刻聆听系统的训练课程，同时也可屏蔽多余的听觉信息", "Connected to the ears and auditory system; continuously plays training courses and can block excess audio"],
    ["无人机显示器", "Drone display"],
    ["植入素体的颈部，显示无人机的输出信息，未使用时显示剩余电量", "Implanted at the neck; displays drone output and shows remaining battery when idle"],
    ["无人机总控核心", "Drone master-control core"],
    ["一次性充电宝，补充无人机50%的电量，记得在电量耗尽前使用", "Disposable power bank: restores 50% drone battery. Use before battery is depleted"],
    ["拘束减缓芯片，将一个部位的拘束等级下调一级", "Restraint easing chip: lowers one part's restraint level by 1"],
    ["拘束收紧芯片，将一个部位的拘束等级上调一级", "Restraint tightening chip: raises one part's restraint level by 1"],
    ["机能恢复芯片，将一个部位的机能限制下调一级", "Function restoration chip: lowers one part's function restriction by 1"],
    ["机能限制芯片，将一个部位的机能限制提升一级", "Function restriction chip: raises one part's function restriction by 1"],
    ["震动控制器，可以调整震动玩具的强度", "Vibration controller: adjusts vibrator intensity"],
    ["高潮限制器，可以调整高潮限制的等级", "Orgasm limiter: adjusts orgasm restriction level"],
    ["显示器开关，可以调整是否使用显示器发言", "Display switch: toggles speaking through the display"],
    ["私人房间房卡，可以传送至私人房间内，可在房间内呼叫无人机侍寝（记得提前记住无人机的id）", "Private-room keycard: teleports to a private room and can call a drone there. Remember the drone ID first"]
];

DTS_EN_LOCAL_REPLACEMENTS.push(...DTS_EN_LOCAL_ITEM_REPLACEMENTS);
DTS_EN_LOCAL_REPLACEMENTS.sort((a, b) => b[0].length - a[0].length);
DTS_EN_LOCAL_ITEM_REPLACEMENTS.sort((a, b) => b[0].length - a[0].length);

function DTSLocalizeVoiceCommandBlock(text) {
    if (!text.includes("——————语音指令——————")) return null;
    const match = text.match(/无人机([^\s<]+)\s+显示状态/);
    const id = match ? match[1] : "(target ID)";
    return [
        "------ Voice Commands (Chinese trigger phrases retained for room compatibility) ------",
        `Say: 无人机${id} 显示状态  (show status)`,
        `Say: 无人机${id} (眼部|耳部|口腔|手臂|腿脚)拘束设为(关闭|激活|最大)  (set restraint level)`,
        `Say: 无人机${id} (眼部|耳部|口腔|手臂|腿脚)机能设为(可用|限制|离线)  (set body-function state)`,
        `Say: 无人机${id} (打开|关闭)显示屏发言  (toggle display speech)`,
        `Say: 无人机${id} 快感装置设为(关闭|激活|最大)  (set pleasure device)`,
        `Say: 无人机${id} 高潮限制设为(关闭|激活|最大)  (set orgasm limit)`,
        `Say: 无人机${id} 高潮奖励  (orgasm reward)`,
        `Say: 无人机${id} 电击惩罚  (shock punishment)`,
        `Say: 无人机${id} 弹出充电曲柄  (deploy charging crank)`,
        "Note: Chinese trigger phrases are kept for compatibility with Chinese DTS rooms. If the drone cannot hear normally, send *command text or (command text) to bypass hearing restriction."
    ].join("\n");
}

function DTSLocalizeDirection(direction) {
    const directions = {
        "右方": "right",
        "左方": "left",
        "下方": "down",
        "上方": "up"
    };
    return directions[direction] || direction;
}

function DTSLocalizeSwitchValue(value) {
    return value === "开启" ? "On" : value === "关闭" ? "Off" : value;
}

function DTSLocalizeKnownDynamicMessage(text) {
    text = text.replace(/收到来自无人机(\d+)的充电求助信号[，,]位于(右方|左方)(\d+)格[，,](下方|上方)(\d+)格处/g, (_match, id, xDir, xCount, yDir, yCount) => `Charging help signal received from Drone ${id}; ${DTSLocalizeDirection(xDir)} ${xCount} tiles, ${DTSLocalizeDirection(yDir)} ${yCount} tiles away`);
    text = text.replace(/收到来自无人机(\d+)的充电求助信号/g, "Charging help signal received from Drone $1");
    text = text.replace(/收到来自无人机(\d+)的任务协助请求：/g, "Mission help request received from Drone $1:");
    text = text.replace(/收到来自操作员(\d+)的远程呼叫请求，即将移动至其所在房间/g, "Remote call request received from Operator $1; moving to their room");
    text = text.replace(/收到来自操作员(\d+)的远程呼叫请求，/g, "Remote call request received from Operator $1. ");
    text = text.replace(/收到来自操作员(\d+)的呼叫请求，即将移动至指定位置/g, "Call request received from Operator $1; moving to specified location");
    text = text.replace(/收到来自操作员(\d+)的呼叫请求，/g, "Call request received from Operator $1. ");
    text = text.replace(/收到来自操作员(\d+)的任务/g, "Mission received from Operator $1");
    text = text.replace(/收到来自(.+?)的强制高潮指令/g, "Forced-orgasm command received from $1");
    text = text.replace(/收到来自(.+?)的震动装置指令/g, "Vibration-device command received from $1");
    text = text.replace(/收到来自(.+?)的惩罚指令/g, "Punishment command received from $1");
    text = text.replace(/操作员(\d+)解除了对本机的控制权限/g, "Operator $1 revoked control permission for this unit");
    text = text.replace(/操作员(\d+)要求对本机的控制权限，点击按钮以/g, "Operator $1 requests control permission for this unit. Click: ");
    text = text.replace(/已(解除|获取)对无人机(\d+)的控制权限/g, (_match, action, id) => `${action === "解除" ? "Revoked" : "Acquired"} control permission for Drone ${id}`);
    text = text.replace(/不具有对该无人机的操作权限，请联系操作员(\d+)以进行操作权限交接/g, "You do not have permission to operate this drone. Contact Operator $1 to transfer operation permission");
    text = text.replace(/已发送指令将目标无人机显示屏发言设为(开启|关闭)/g, (_match, value) => `Command sent: target drone display speech set to ${DTSLocalizeSwitchValue(value)}`);
    text = text.replace(/已(注销|注册为)操作员身份/g, (_match, action) => `${action === "注销" ? "Unregistered" : "Registered as"} operator identity`);
    text = text.replace(/电量不足，可向附近玩家([\s\S]*?)充电/g, "Battery low. Ask nearby players for charging help: $1");
    text = text.replace(/已进入仓库区，可在柜子处([\s\S]*?)或([\s\S]*?)货物/g, "Entered warehouse area. At cabinets you can $1 or $2 cargo");
    text = text.replace(/货物([A-Z]\d+)/g, "Cargo $1");
    text = text.replace(/无人机(\d+)/g, "Drone $1");
    text = text.replace(/操作员(\d+)/g, "Operator $1");
    return text;
}

function DTSLocalizeMixedMessage(text) {
    text = text.replace(/(.+?)被(.+?)设置为(.+?)(?=$|\n|<)/g, "$1 was set by $2 to $3");
    text = text.replace(/Drone化改造/g, "drone conversion");
    text = text.replace(/High制高潮/g, "forced orgasm");
    text = text.replace(/charginghelp/g, "charging help");
    text = text.replace(/点击按钮以/g, "Click: ");
    text = text.replace(/Cargo([A-Z]\d+)/g, "Cargo $1");
    return text;
}

function DTSNormalizeLocalizedPunctuation(text) {
    if (!/[A-Za-z]/.test(text)) return text;
    return text
        .replace(/，/g, ", ")
        .replace(/：/g, ": ")
        .replace(/。/g, ". ")
        .replace(/（/g, " (")
        .replace(/）/g, ")")
        .replace(/ +/g, " ");
}

function DTSLocalizeMessage(message) {
    if (message == null) return message;
    let text = String(message);
    if (DTS_EN_LOCAL_EXACT_REPLACEMENTS.has(text)) return DTS_EN_LOCAL_EXACT_REPLACEMENTS.get(text);
    const voice = DTSLocalizeVoiceCommandBlock(text);
    if (voice != null) return voice;
    text = DTSLocalizeKnownDynamicMessage(text);
    text = text.replace(/将([A-Z]\d+)的货物运送至([A-Z]\d+)/g, "Move cargo from $1 to $2");
    text = text.replace(/即将开始休眠(\d+)个小时，下线后依旧计算时间，/g, "About to sleep for $1 hours. Time still counts while offline. ");
    text = text.replace(/休眠开始，获得(\d+)配额点数/g, "Sleep started. Gained $1 quota points");
    text = text.replace(/答案正确，获得(\d+)配额点数，已达到每日上限/g, "Correct answer. Gained $1 quota points, daily limit reached");
    text = text.replace(/答案正确，获得(\d+)配额点数/g, "Correct answer. Gained $1 quota points");
    for (const [from, to] of DTS_EN_LOCAL_REPLACEMENTS) {
        text = text.split(from).join(to);
    }
    text = DTSLocalizeKnownDynamicMessage(text);
    text = DTSLocalizeMixedMessage(text);
    text = DTSNormalizeLocalizedPunctuation(text);
    return text;
}

function DTSLocalizeText(text) {
    return DTSLocalizeMessage(text);
}

function DTSLocalizeItemDisplayText(text) {
    if (text == null) return text;
    let result = String(text);
    for (const [from, to] of DTS_EN_LOCAL_ITEM_REPLACEMENTS) {
        result = result.split(from).join(to);
    }
    return result;
}

function DTSLocalizeItemTextNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE || !node.nodeValue || !/[\u4e00-\u9fff]/.test(node.nodeValue)) return;
    const localized = DTSLocalizeItemDisplayText(node.nodeValue);
    if (localized !== node.nodeValue) node.nodeValue = localized;
}

function DTSLocalizeItemDom(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
        DTSLocalizeItemTextNode(root);
        return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE && root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) return;
    const skipTags = new Set(["SCRIPT", "STYLE", "TEXTAREA", "INPUT"]);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            const parent = node.parentElement;
            if (!parent || skipTags.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
            return /[\u4e00-\u9fff]/.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) DTSLocalizeItemTextNode(node);
}

function DTSInstallItemDomLocalizer() {
    const start = () => {
        if (!document.body) return;
        DTSLocalizeItemDom(document.body);
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === "characterData") DTSLocalizeItemDom(mutation.target);
                for (const node of mutation.addedNodes) DTSLocalizeItemDom(node);
            }
        });
        observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    };
    if (document.body) start();
    else document.addEventListener("DOMContentLoaded", start, { once: true });
}

DTSInstallItemDomLocalizer();
// ---- Begin pinned main script ----
//DTS基础插件
var secAfterStart = 0;
var timeEventInterval = -1;
var charaterInstalledScript_isDrone = new Map();
var showedEnterHelp = false;
var showChangeLog = false;
var initComplete = false;
var changeLog =
    `更新日志
——————V1.5——————
1.修复了操作员无法在仓库区互动的问题
2.增加了无人机休眠区域，位于设施南侧偏东
3.修复了部分道具回收价格大于售价的问题
——————V1.4——————
1.修复了高潮失败时被判定为高潮的问题
2.增加了呼叫救援脱困的功能以防因掉线等原因卡死
——————V1.3——————
1.修复了部分道具使用后无法消耗的问题
——————V1.2——————
1.修复了基础训练无法完成的问题
2.补充了被打屁股和被摸头任务缺失的文本
3.增加了完成基础与进阶教育后的额外效果
4.暗改了周围玩家高潮时补充的电量，不影响自己高潮时的补充量
5.增加了降低显示屏发言的改造项目
——————V1.1——————
1.修复了触发惩罚时文本错误的问题
2.修复了处理杂物每日奖励上限丢失的问题
3.优化了训练与教育的部分文本
4.增加了无人机状态信息里的可用程序显示，显示接受教育与训练后的效果
5.修复了获取控制权、手动对无人机充电、点击开始训练时的判定错误
——————V1.0——————
1.增加了任务系统，道具系统
2.增加了训练设施地图
——————V0.2——————
1.增加了语音指令功能，便于无插件的玩家互动
2.增加了注册成为无人机时的流程
3.修复了若干bug
4.乳胶平滑面具的物品分层会竟然在修改物品设置时重置，ben987你赢了
——————V0.1——————
1.完成基础功能`


//{
//    "Item": "",
//        "AssetGroup": "",
//            "Color": ,
//    "Lock": "HighSecurityPadlock",
//        "Private": false,
//            "ItemProperty": { },
//    "Type": null,
//        "Property": "Normal",
//            "TypeRecord": ,
//    "MemberName": "zajucd",
//        "MemberNumber": 7092
//},
var Crate = {
    "Item": "FuturisticCrate",
    "AssetGroup": "ItemDevices",
    "Color": [
        "#222222",
        "Default",
        "#444444",
        "Default",
        "Default",
        "#FF1199",
        "Default",
        "#444444",
        "#555555",
        "#3B7F2C",
        "Default",
        "Default",
        "#BBBBFF",
        "Default"
    ],
    "Lock": "HighSecurityPadlock",
    "Private": false,
    "ItemProperty": {},
    "Type": null,
    "Property": "Normal",
    "TypeRecord": {
        "w": 1,
        "l": 0,
        "a": 0,
        "d": 0,
        "t": 0,
        "h": 0
    },
    "MemberName": "zajucd",
    "MemberNumber": 7092
}
var CrateBind = {
    "Item": "FuturisticCrate",
    "AssetGroup": "ItemDevices",
    "Color": [
        "#222222",
        "Default",
        "#444444",
        "Default",
        "Default",
        "#FF1199",
        "Default",
        "#444444",
        "#555555",
        "#3B7F2C",
        "Default",
        "Default",
        "#BBBBFF",
        "Default"
    ],
    "Lock": "HighSecurityPadlock",
    "Private": false,
    "ItemProperty": {},
    "Type": null,
    "Property": "Normal",
    "TypeRecord": {
        "w": 1,
        "l": 3,
        "a": 3,
        "d": 0,
        "t": 0,
        "h": 0
    },
    "MemberName": "zajucd",
    "MemberNumber": 7092
}
var OneBar = {
    "Item": "OneBarPrison",
    "AssetGroup": "ItemDevices",
    "Color": [
        "Default"
    ],
    "Lock": "HighSecurityPadlock",
    "Private": false,
    "ItemProperty": {},
    "Type": null,
    "Property": "Normal",
    "MemberName": "zajucd",
    "MemberNumber": 7092
}
var BasicDroneBinds = [
    //0
    {
        "Item": "LatexCatsuit",
        "AssetGroup": "Suit",
        "TypeRecord": {
            "typed": 0
        },
        "Color": [
            "#202020",
            "Default",
            "Default",
            "Default"
        ],
        "Text": "",
        "Text2": "",
        "Text3": ""
    },
    {
        "Item": "LatexCatsuit",
        "AssetGroup": "SuitLower",
        "TypeRecord": {
            "typed": 0
        },
        "Color": [
            "#202020",
            "Default",
            "Default",
            "Default"
        ],
        "Text": "",
        "Text2": "",
        "Text3": ""
    },

    //2
    {
        "Item": "FuturisticHarness",
        "AssetGroup": "ItemTorso",
        "Color": [
            "#666666",
            "#7A7A7A",
            "#393939",
            "#FFFFFF"
        ],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {},
        "Type": null,
        "Property": "Normal",
        "TypeRecord": {
            "typed": 0
        },
        "Name": "无人机体态控制装置",
        "Description": "植入素体的肩部、背部、腹部，通过高扭力舵机控制无人机的体态，以防出现动作失误",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },
    {
        "Item": "HighSecurityHarness",
        "AssetGroup": "ItemTorso2",
        "Color": [
            "#444444",
            "Default"
        ],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {},
        "Type": null,
        "Property": "Normal",
        "TypeRecord": {
            "typed": 0
        },
        "Name": "无人机体态控制装置",
        "Description": "植入素体的肩部、背部、腹部，通过高扭力舵机控制无人机的体态，以防出现动作失误",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },

    //4
    {
        "Item": "FuturisticVibrator",
        "AssetGroup": "ItemVulva",
        "Color": [
            "#454545",
            "#555555",
            "Default"
        ],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {},
        "Type": null,
        "Property": "Normal",
        "TypeRecord": {
            "vibrating": 0
        },
        "Name": "无人机总电源与无人机电源接口",
        "Description": "无人机总电源植入素体子宫内，供应无人机的基础活动，无人机电源接口从阴道伸至体外，可以接受来自外部充电也可通过高潮充电",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },

    //5
    {
        "Item": "VibeHeartClitPiercing",
        "AssetGroup": "ItemVulvaPiercings",
        "Color": [
            "#595959",
            "Default"
        ],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {},
        "Type": null,
        "Property": "Normal",
        "TypeRecord": {
            "vibrating": 0
        },
        "Name": "无人机内循环系统控制装置",
        "Description": "植入素体的乳头内，通过物理震动引发性唤起以进行激素调节",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },
    {
        "Item": "LockingVibePlug",
        "AssetGroup": "ItemButt",
        "Color": ["Default"],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {},
        "Type": null,
        "Property": "Normal",
        "TypeRecord": {
            "vibrating": 0
        },
        "Name": "无人机内循环系统控制装置",
        "Description": "植入素体的肛门内，通过物理震动引发性唤起以进行激素调节",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },
    {
        "Item": "VibeHeartPiercings",
        "AssetGroup": "ItemNipplesPiercings",
        "Color": [
            "#6C6C6C",
            "Default"
        ],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {},
        "Type": null,
        "Property": "Normal",
        "TypeRecord": {
            "vibrating": 0
        },
        "Name": "无人机内循环系统控制装置",
        "Description": "植入素体的阴蒂内，通过物理震动引发性唤起以进行激素调节",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },
    {
        "Item": "ShockClamps",
        "AssetGroup": "ItemNipples",
        "Color": [
            "#Default"
        ],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {},
        "Type": null,
        "Property": "Normal",
        "TypeRecord": {
            "typed": 0
        },
        "Name": "无人机惩罚装置",
        "Description": "植入素体的乳头内，通过电流对无人机的失误行为进行惩罚",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },

    //9
    {
        "Item": "SciFiPleasurePanties",
        "AssetGroup": "ItemPelvis",
        "Color": [
            "#454545",
            "#202020",
            "#878787",
            "#202020",
            "#878787",
            "#878787",
            "Default"
        ],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {},
        "Type": null,
        "Property": "Normal",
        "TypeRecord": {
            "c": 3,
            "i": 0,
            "o": 0,
            "s": 0
        },
        "Name": "无人机内循环系统控制装置中枢",
        "Description": "植入素体的小腹，对所有内循环系统控制装置进行控制调节，同时搭载对素体的高潮机能进行限制的功能",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },
    {
        "Item": "FuturisticBra",
        "AssetGroup": "ItemBreast",
        "Color": [
            "#4A4A4A",
            "#FFFFFF",
            "#FFFFFF",
            "#4B4B4B",
            "#363636"
        ],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {},
        "Type": null,
        "Property": "Normal",
        "TypeRecord": {
            "typed": 0
        },
        "Name": "无人机生理信息监控装置",
        "Description": "植入素体的胸口，检测体温、心率、性唤起程度以进行生理状态调节",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },

    //11
    {
        "Item": "FuturisticAnkleCuffs",
        "AssetGroup": "ItemFeet",
        "Color": [
            "Default",
            "#494949",
            "#303030",
            "#FFFFFF"
        ],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {},
        "Type": null,
        "Property": "Normal",
        "TypeRecord": { typed: 2 },
        "Name": "无人机运动控制装置",
        "Description": "接入素体的脚踝，使其无法进行未授权的运动，同时也能在必要时进行运动辅助",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },
    {
        "Item": "FuturisticLegCuffs",
        "AssetGroup": "ItemLegs",
        "Color": [
            "#Default",
            "#4A4A4A",
            "#383838",
            "#FFFFFF"
        ],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {},
        "Type": null,
        "Property": "Normal",
        "TypeRecord": { typed: 2 },
        "Name": "无人机运动控制装置",
        "Description": "接入素体的腿部，使其无法进行未授权的运动，同时也能在必要时进行运动辅助",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },
    {
        "Item": "FuturisticMittens",
        "AssetGroup": "ItemHands",
        "Color": [
            "#777777",
            "#6E6E6E",
            "#3D3D3D",
            "Default"
        ],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {},
        "Type": null,
        "Property": "Normal",
        "TypeRecord": {
            "typed": 1
        },
        "Name": "无人机运动控制装置",
        "Description": "接入素体的手部，使其无法进行未授权的运动，同时也能在必要时进行运动辅助",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },
    {
        "Item": "FuturisticHeels2",
        "AssetGroup": "ItemBoots",
        "Color": [
            "#212121",
            "#4A4A4A",
            "#383838",
            "#3D3D3D",
            "#404040",
            "#3D3D3D",
            "Default"
        ],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {},
        "Type": null,
        "Property": "Normal",
        "TypeRecord": {
            "typed": 0
        },
        "Name": "无人机运动控制装置",
        "Description": "接入素体的足部，使其无法进行未授权的运动，同时也能在必要时进行运动辅助",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },
    {
        "Item": "FuturisticCuffs",
        "AssetGroup": "ItemArms",
        "Color": [
            "#4F4F4F",
            "#353535",
            "#FFFFFF"
        ],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {},
        "Type": null,
        "Property": "Normal",
        "TypeRecord": {
            "typed": 0
        },
        "Name": "无人机运动控制装置",
        "Description": "接入素体的臂部，使其无法进行未授权的运动，同时也能在必要时进行运动辅助",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },

    //16
    {
        "Item": "DroneMask",
        "AssetGroup": "ItemHood",
        "Color": [
            "#222222",
            "#CCCCCC",
            "#7F7F7F",
            "#00F4FD",
            "#E700CA"
        ],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {},
        "Type": null,
        "Property": "Normal",
        "TypeRecord": {
            "m": 0,
            "e": 0,
            "p": 1,
            "g": 2,
            "s": 1,
            "h": 0,
            "j": 5,
            "b": 0
        },
        "OverridePriority": {
            "EyeSmile": 0,
            "EyeSmileShine": 0,
            "Base": 12,
            "Shine": 12,
            "Barcode": 12,
            "Text": 12,
            "EyeSpiral": 0,
            "EyeSculpted": 0,
            "EyeRegular": 0,
            "EyeHoles": 0,
            "EyeRegularGlow": 0,
            "EyeSculptedGlow": 0,
            "EyeSmileGlow": 0,
            "EyeSpiralGlow": 0,
            "EyeConcaveShine": 0,
            "EyeRegularShine": 0,
            "EyeHolesShine": 0,
            "EyeSculptedShine": 0,
            "EyeSpiralShine": 0
        },
        "Name": "无人机个体识别装置",
        "Description": "植入素体的面部，禁用了素体原有的面部个体识别机能，转为通过条形码进行个体识别",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },

    //17
    {
        "Item": "OTNPlugGag",
        "AssetGroup": "ItemMouth",
        "Color": [
            "#665D5D",
            "#514D57",
            "Default",
            "#979595"
        ],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {
            "OverridePriority": {
                "Base": 0,
                "Straps": 0,
                "StrapsLong": 0
            }
        },
        "Type": null,
        "Property": "Normal",
        "TypeRecord": { typed: 1 },
        "Name": "无人机消化系统外部接口",
        "Description": "接入素体的口腔，联通消化系统，使其可以接受无人机用营养块，同时也可作为性器使用",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },
    {
        "Item": "InteractiveVisor",
        "AssetGroup": "ItemHead",
        "Color": [
            "#333333",
            "#222222",
            "#CCCCCC",
            "#222222",
            "#CCCCCC",
            "#FF5AC8"
        ],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {},
        "Type": null,
        "Property": "Normal",
        "TypeRecord": {
            "typed": 0
        },
        "Name": "无人机视觉系统外部接口",
        "Description": "接入素体的面部，链接视觉系统，使其可以直接接收来自系统的指令，同时也可屏蔽多余的视觉信息",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },
    {
        "Item": "LatexRespirator",
        "AssetGroup": "ItemMouth2",
        "Color": [
            "#333333",
            "#222222",
            "#CCCCCC",
            "#222222",
            "#CCCCCC",
            "#FF5AC8"
        ],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {},
        "Type": null,
        "Property": "Normal",
        "TypeRecord": {
            "f": 2,
            "g": 1,
            "s": 0,
            "m": 2,
            "l": 1
        },
        "Name": "无人机呼吸系统外部接口",
        "Description": "接入素体的鼻腔，链接呼吸系统，使其仅可呼吸无人机用含药物气体，同时也封闭会厌软骨防止口部呼吸",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },
    {
        "Item": "FuturisticEarphones",
        "AssetGroup": "ItemEars",
        "Color": [
            "#898989",
            "#2A2A2A",
            "Default"
        ],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {},
        "Type": null,
        "Property": "Normal",
        "TypeRecord": {
            "typed": 0
        },
        "Name": "无人机听觉系统外部接口",
        "Description": "接入素体的耳部，链接听觉系统，使其时刻聆听系统的训练课程，同时也可屏蔽多余的听觉信息",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },

    //21
    {
        "Item": "ShockCollar",
        "AssetGroup": "ItemNeck",
        "Color": [
            "Default",
            "Default"
        ],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {},
        "Type": null,
        "Property": "Normal",
        "Name": "无人机惩罚装置",
        "Description": "植入素体的颈部，通过电流对无人机的失误行为进行惩罚",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },
    {
        "Item": "ElectronicTag",
        "AssetGroup": "ItemNeckAccessories",
        "Color": [
            "#595959",
            "Default",
            "#000000"
        ],
        "Lock": "HighSecurityPadlock",
        "Private": false,
        "ItemProperty": {},
        "Type": null,
        "Property": "Normal",
        "Name": "无人机显示器",
        "Description": "植入素体的颈部，显示无人机的输出信息，未使用时显示剩余电量",
        "MemberName": "无人机总控核心",
        "MemberNumber": 7092
    },

    //23
    {
        "Item": "Antenna",
        "AssetGroup": "HairAccessory1",
        "TypeRecord": {
            "typed": 5
        },
        "Color": [
            "#8F8F8F",
            "#000000",
            "#131313",
            "#FF5AC8",
            "#FF5AC8",
            "#8F8F8F",
            "#000000",
            "#131313",
            "#FF5AC8",
            "#FF5AC8"
        ],
    },
]
var BasicDroneeyes = [
    [
        {

            "Item": "InteractiveVisor",
            "AssetGroup": "ItemHead",
            "TypeRecord": {
                "typed": 0
            },
        },
    ],
    [
        {

            "Item": "InteractiveVisor",
            "AssetGroup": "ItemHead",
            "TypeRecord": {
                "typed": 1
            },
            "OverridePriority": {
                "Base": 12,
                "EyeRegularShine": 0,
                "Shine": 12,
                "Text": 12,
                "EyeRegular": 0
            },
        },
    ],
    [
        {

            "Item": "InteractiveVisor",
            "AssetGroup": "ItemHead",
            "TypeRecord": {
                "typed": 3
            },
        },
    ],
]
var BasicDroneears = [
    [
        {
            "Item": "FuturisticEarphones",
            "AssetGroup": "ItemEars",
            "TypeRecord": {
                "typed": 0
            },
        }
    ],
    [
        {
            "Item": "FuturisticEarphones",
            "AssetGroup": "ItemEars",
            "TypeRecord": {
                "typed": 1
            },
        }
    ],
    [
        {
            "Item": "FuturisticEarphones",
            "AssetGroup": "ItemEars",
            "TypeRecord": {
                "typed": 3
            },
        }
    ],
]
var BasicDronemouth = [
    [
        {
            "Item": "OTNPlugGag",
            "AssetGroup": "ItemMouth",
            "TypeRecord": { typed: 0 },
        }
    ],
    [
        {
            "Item": "OTNPlugGag",
            "AssetGroup": "ItemMouth",
            "TypeRecord": { typed: 1 },
        }
    ],
    [
        {
            "Item": "OTNPlugGag",
            "AssetGroup": "ItemMouth",
            "TypeRecord": { typed: 1 },
        }
    ]
]
var BasicDronebody = [
    [
        {
            "Item": "SciFiPleasurePanties",
            "AssetGroup": "ItemPelvis",
            "TypeRecord": {
                "o": 0,
            },
        }
    ],
    [
        {
            "Item": "SciFiPleasurePanties",
            "AssetGroup": "ItemPelvis",
            "TypeRecord": {
                "o": 2,
            },
        }
    ],
    [
        {
            "Item": "SciFiPleasurePanties",
            "AssetGroup": "ItemPelvis",
            "TypeRecord": {
                "o": 1,
            },
        }
    ],
]
var BasicDronehands = [
    [
        {
            "Item": "FuturisticCuffs",
            "AssetGroup": "ItemArms",
            "TypeRecord": {
                "typed": 0
            },
        },
        {
            "Item": "FuturisticMittens",
            "AssetGroup": "ItemHands",
            "TypeRecord": {
                "typed": 1
            },
        }
    ],
    [
        {
            "Item": "FuturisticCuffs",
            "AssetGroup": "ItemArms",
            "TypeRecord": {
                "typed": 1
            },
        },
        {
            "Item": "FuturisticMittens",
            "AssetGroup": "ItemHands",
            "TypeRecord": {
                "typed": 0
            },
        }
    ],
    [
        {
            "Item": "FuturisticCuffs",
            "AssetGroup": "ItemArms",
            "TypeRecord": {
                "typed": 3
            },
        },
        {
            "Item": "FuturisticMittens",
            "AssetGroup": "ItemHands",
            "TypeRecord": {
                "typed": 0
            },
        }
    ]
]
var BasicDronelegs = [
    [
        {
            "Item": "FuturisticAnkleCuffs",
            "AssetGroup": "ItemFeet",
            "TypeRecord": {
                "typed": 0
            },
        },
        {
            "Item": "FuturisticLegCuffs",
            "AssetGroup": "ItemLegs",
            "TypeRecord": {
                "typed": 0
            },
        }
    ],
    [
        {
            "Item": "FuturisticAnkleCuffs",
            "AssetGroup": "ItemFeet",
            "TypeRecord": {
                "typed": 2
            },
        },
        {
            "Item": "FuturisticLegCuffs",
            "AssetGroup": "ItemLegs",
            "TypeRecord": {
                "typed": 2
            },
        }
    ],
    [
        {
            "Item": "FuturisticAnkleCuffs",
            "AssetGroup": "ItemFeet",
            "TypeRecord": {
                "typed": 1
            },
        },
        {
            "Item": "FuturisticLegCuffs",
            "AssetGroup": "ItemLegs",
            "TypeRecord": {
                "typed": 1
            },
        }
    ],
]
var BasicDroneSet = {
    Binds: BasicDroneBinds,
    eyes: BasicDroneeyes,
    ears: BasicDroneears,
    mouth: BasicDronemouth,
    body: BasicDronebody,
    hands: BasicDronehands,
    legs: BasicDronelegs,

}
var AllEquipSets = {
    BasicDrone: BasicDroneSet,
}
const shockItems = [
    {
        "Item": "SciFiPleasurePanties",
        "AssetGroup": "ItemPelvis",
    },
    {
        "Item": "ShockClamps",
        "AssetGroup": "ItemNipples",
    },
    {
        "Item": "ShockCollar",
        "AssetGroup": "ItemNeck",
    }
]
const vibeItem = [
    {
        "Item": "SciFiPleasurePanties",
        "AssetGroup": "ItemPelvis",
    },
    {
        "Item": "FuturisticVibrator",
        "AssetGroup": "ItemVulva",
    },
    {
        "Item": "VibeHeartClitPiercing",
        "AssetGroup": "ItemVulvaPiercings",
    },
    {
        "Item": "LockingVibePlug",
        "AssetGroup": "ItemButt",
    },
    {
        "Item": "VibeHeartPiercings",
        "AssetGroup": "ItemNipplesPiercings",
    }
]



var bindLevelStrings = ["关闭", "激活", "最大"]
var bodyLevelStrings = ["可用", "限制", "离线"]
var levelStrings = [bindLevelStrings, bodyLevelStrings];
var typeStrings = ["bindStatus", "bodyStatus"];
var typeDisplayStrings = ["拘束", "机能"]
var bodyPartStrings = ["eyes", "ears", "mouth", "body", "hands", "legs"];
var bodyPartDisplayStrings = ["眼部", "耳部", "口腔", "快感", "手臂", "腿脚"];
var bodyPartAssetGroups = [
    ["ItemHead", "ItemHood"],
    ["ItemEars", "ItemHood"],
    ["ItemMouth", "ItemMouth2", "ItemMouth3"],
    ["ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemNipples", "ItemNipplesPiercings","ItemBreast"],
    ["ItemArms", "ItemHands"],
    ["ItemBoots", "ItemFeet","ItemLegs"],
]
var ArousalDisplayStrings = ["高潮限制", "快感装置"];
var vibeModeStrings = {
    "-1": "Off",
    "0": "Low",
    "1": "Medium",
    "2": "High",
    "3": "Maximum",
}
const MsgCmds = {
    HeartBeatPack: {
        Command: (sender, param) => {
            if (sender.MemberNumber == Player.MemberNumber) return;
            if (param.isDrone != undefined) {
                charaterInstalledScript_isDrone[sender.MemberNumber] = param.isDrone;
            }
            if (param.recive) {
                SendDTSMsg(sender, new MsgInfo("HeartBeatPack", { recive: false, isDrone : PlayerDroneInfo().isDrone }));
            }
        }
    },
    SetStatus: {
        Command: (sender, param) => {
            if (param.length < 3) return;
            var type = param[0];
            var part = param[1];
            var level = param[2];
            DoSetBodyOrBindStatus(type, part, level, sender);

        }
    },
    BatteryHelp: {
        Command: (sender, param) => {
            if (ChatRoomMapViewIsActive() == false) {
                SendMessageToSelf(`收到来自无人机${sender.MemberNumber}的充电求助信号`)
            }
            else {
                var xDiff = sender.MapData.Pos.X - Player.MapData.Pos.X;
                var yDiff = sender.MapData.Pos.Y - Player.MapData.Pos.Y;
                SendMessageToSelf(`收到来自无人机${sender.MemberNumber}的充电求助信号,位于${(xDiff > 0 ? "右方" : "左方") + Math.abs(xDiff)}格,${(yDiff > 0 ? "下方" : "上方") + Math.abs(yDiff)}格处`)
            }
        }
    },
    DoPunishment: {
        Command: (sender, param) => {
            if (param == null || param.length < 2) {
                var pdi = PlayerDroneInfo();
                DoPunishment(pdi.shockLevel, pdi.shoclCount);
            }
            else {
                var power = param[0];
                var count = param[1];
                SendMessageToSelf(`收到来自${sender.Name}的惩罚指令`);
                DoPunishment(power, count);
            }
        }
    },
    DoVibe: {
        Command: (sender, param) => {
            if (param.length < 1) return;
            var power = param[0];
            SendMessageToSelf(`收到来自${sender.Name}的震动装置指令`);
            DoVibe(power);
        }
    },
    DoOrgasm: {
        Command: (sender, param) => {
            SendMessageToSelf(`收到来自${sender.Name}的强制高潮指令`);
            DoOrgasm();
        }
    },
    RequestStatus: {
        Command: (sender, param) => {
            ResponseRequestStatus(sender, param);
        }
    },
    RecivedStatus: {
        Command: (sender, param) => {
            ShowStatus(param);
        }
    },
    RecivedStatusModify: {
        Command: (sender, param) => {
            if (ShowAvailableModify != undefined) {
                ShowAvailableModify(param);
            }
        }
    },
    DoModifyByOwner: {
        Command: (sender, param) => {
            if (DoModifyByOwner != undefined) {
                DoModifyByOwner(param);
            }
        }
    },
    BatteryCharge: {
        Command: (sender, param) => {
            ResponseBatteryCharge(param);
        }
    },
    AddArousal: {
        Command: (sender, param) => {
            ActivityTimerProgress(Player, param);
        }
    },
    ReqOwnerRight: {
        Command: (sender, param) => {
            if (param) {
                PlayerDroneInfo().ownerId = -1;
                SendMessageToSelf(`操作员${sender.MemberNumber}解除了对本机的控制权限`);
                SendDTSMsg(sender, new MsgInfo("RespOwnerRight", param));
            }
            else {
                SendMessageToSelf(`操作员${sender.MemberNumber}要求对本机的控制权限，点击按钮以${styleButton("同意", SetToDroneAccept, sender)}`);
            }
        }
    },
    RespOwnerRight: {
        Command: (sender, param) => {
            SendMessageToSelf(`已${param ? "解除" : "获取"}对无人机${sender.MemberNumber}的控制权限`);
        }
    },
    SetDisplayTalk: {
        Command: (sender, param) => {
            ResponseSetDisplayTalk(sender, param);
        }
    },
    SendMissionHelp: {
        Command: (sender, param) => {
            ShowMissionsString(param, `收到来自无人机${sender.MemberNumber}的任务协助请求：`);
        }
    },
    PutMission: {
        Command: (sender, param) => {
            SendMessageToSelf(`收到来自操作员${sender.MemberNumber}的任务`);
            TakeMission();
        }
    },
    CallToPos: {
        Command: (sender, param) => {
            var pdi = PlayerDroneInfo();
            if (pdi.isDrone) {
                SendMessageToSelf(`收到来自操作员${sender.MemberNumber}的呼叫请求，即将移动至指定位置`);
                ClearTagMessage("CallToPos");
                MovePlayer(param, true);
            }
            else {
                SendMessageToSelf(`收到来自操作员${sender.MemberNumber}的呼叫请求，${styleButton("移动至指定位置", () => {
                    ClearTagMessage("CallToPos");
                    MovePlayer(param, true);
                })}`, "CallToPos");
                setTimeout(() => { ClearTagMessage("CallToPos") }, 30000);
            }
        }
    }

}

const CommandsAction = {
    findtarget: {
        Command: (param) => {
            var mn = parseInt(param[0]);
            if (isNaN(mn) == false) {
                var char = ChatRoomCharacter.find(c => c.MemberNumber === mn);
                if (char) {
                    DoFindTatget(char);
                }
                else {
                    SendMessageToSelf("未找到目标");
                }
            }
            else {
                SendMessageToSelf("参数错误");
            }
        }
    },
    findtargetmodify: {
        Command: (param) => {
            var mn = parseInt(param[0]);
            if (isNaN(mn) == false) {
                var char = ChatRoomCharacter.find(c => c.MemberNumber === mn);
                if (char) {
                    DoFindTatget(char, "RecivedStatusModify");
                }
                else {
                    SendMessageToSelf("未找到目标");
                }
            }
            else {
                SendMessageToSelf("参数错误");
            }
        }
    },
    findtargetoprivate: {
        Command: (param) => {
            var mn = parseInt(param[0]);
            if (isNaN(mn) == false) {
                var char = ChatRoomCharacter.find(c => c.MemberNumber === mn);
                if (char) {
                    var index = -1;
                    if (PrivateRoom != undefined && PrivateRoomCrate != undefined) {
                        for (var i in PrivateRoom.Areas) {
                            if (IsInArea(Player.MapData.Pos, PrivateRoom.Areas[i])) {
                                index = i;
                                break;
                            }
                        }
                    }
                    var pos = Object.assign({}, Player.MapData.Pos);
                    if (index != -1) {
                        pos = PrivateRoomCrate.Areas[index];
                    }
                    SendDTSMsg(char, new MsgInfo("CallToPos", pos));
                }
                else {
                    SendMessageToSelf("未找到目标");
                }
            }
            else {
                SendMessageToSelf("参数错误");
            }
        }
    }

}

const BeepCmds = {
    cometoroom: {
        Command: async (senderMn, param, options) => {
            if (options.chatRoomName == undefined || options.chatRoomName == null) return;
            var pdi = PlayerDroneInfo();
            var moveToRoom = async () => {
                ClearTagMessage("CallToPos")
                if (ChatRoomData.Name.toLowerCase() !== options.chatRoomName.toLowerCase()) {
                    try {
                        await JoinRoom(options.chatRoomName);
                    }
                    catch {
                        return;
                    }
                }
                if (ChatRoomIsViewActive("Map") == false) return;
                try {
                    var pos = ChatRoomGetCharacter(senderMn).MapData.Pos;
                    MovePlayer(pos);
                }
                catch {
                    return;
                }
            }
            if (pdi.isDrone && pdi.ownerId == senderMn) {
                SendMessageToSelf(`收到来自操作员${senderMn}的远程呼叫请求，即将移动至其所在房间`);
                moveToRoom();
            }
            else {
                SendMessageToSelf(`收到来自操作员${senderMn}的远程呼叫请求，${styleButton("移动至其所在房间", () => {
                    moveToRoom();
                })}`, "CallToPos");
                setTimeout(() => { ClearTagMessage("CallToPos") }, 30000);
            }
        }
    }
}

//#region 基础装备穿脱函数
function RemoveClothes(sender, refresh = true, removeUnderwear = true, removeCosplay = false) {
    CharacterNaked(sender)
    if (refresh == true) {
        CharacterLoadEffect(sender);
        ChatRoomCharacterUpdate(sender);
    }

}
//移除所有拘束
function RemoveRestrains(sender, refresh = true) {
    RemoveRestrainsWithAssetGroup(sender, AssetGroup, refresh);
}

function RemoveRestrainByOneAssetGroup(sender, assetGroup, refresh = true) {
    RemoveRestrainsWithAssetGroup(sender, [assetGroup], refresh)
}

function RemoveRestrainsWithAssetGroup(sender, group, refresh = true) {
    if (sender == null) return;
    for (var ag of group) {
        if ((ag.Name ?? false) == false) {
            if (ag.startsWith("Item")) {
                InventoryRemove(sender, ag)
            }
        }
        else {
            if (ag.Name.startsWith("Item")) {
                InventoryRemove(sender, ag.Name)
            }
        }
    }
    if (refresh == true) {
        CharacterLoadEffect(sender);
        ChatRoomCharacterUpdate(sender);
    }
}

function AllAssetGroupName() {
    let result = []
    for (let obj of AssetGroup) {
        result.push(obj.Name);
    }
    return result;
}
function GetAllInventory(sender) {
    for (let ag of AssetGroup) {
        if (ag.Name.startsWith("Item")) {
            let geted = InventoryGet(sender, ag.Name);
            if (geted ?? false) {
                console.log(geted);
                if ((geted.Property ?? false) && (geted.Property.TypeRecord ?? false)) {
                    console.log(geted.Property.TypeRecord)
                }
                console.log(geted.Asset.Name);
                console.log(ag.Name);
            }

        }
    }
}


async function WearEquips(target, EquipList, refresh = true, craft = true, difficulty = 1000) {
    var sender = ChatRoomGetCharacter(target.MemberNumber);
    if (sender == undefined) return;
    var pushList = [];
    for (let i = 0; i < EquipList.length; i++) {
        let res = Object.assign({}, EquipList[i]);
        const ID = CharacterAppearanceGetCurrentValue(sender, res.AssetGroup, "ID");
        if (ID != "None") {
            sender.Appearance.splice(ID, 1);
        }
        let colors = [];
        if (res.Color != undefined) {
            //color是数组
            if (Array.isArray(res.Color)) {
                colors = Object.assign([], res.Color);
            }
            //color是字符串
            else {
                colors = res.Color.replace(/\s*/g, "").split(",");
            }
        }
        else {
            colors = CharacterAppearanceGetCurrentValue(sender, res.AssetGroup, "Color");
        }

        const A = AssetGet(sender.AssetFamily, res.AssetGroup, res.Item)
        if (A != null) {
            let item = {
                Asset: A,
                Color: colors,
                Difficulty: difficulty,
            }
            ExtendedItemInit(sender, item, false, false);
            pushList.push(item);
        }

    }
    sender.Appearance.push(...pushList);
    if (craft) {
        for (let i of EquipList) {
            let res = Object.assign({}, i)
            let AssetGroup = res["AssetGroup"];
            delete res.AssetGroup;
            if (Array.isArray(res.Color)) {
                var str = "";
                for (let c of res.Color) {
                    str += c;
                    str += ",";
                }
                res.Color = str;
            }
            InventoryCraft(sender, sender, AssetGroup, res, false, true, false);
            await sleep(100);
        }
    }

    if (refresh) {
        CharacterLoadEffect(sender);
        ChatRoomCharacterUpdate(sender);
    }

}
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
//#endregion

var hookMap = new Map();
/**
 * 原地 Hook 指定函数，支持 beforeFn 取消原函数执行并返回结果
 * @param {string} funcName - 函数名称
 * @param {Object|null} context - 函数所在的对象；若为 null 则使用全局对象
 * @param {Function} beforeFn - 前置钩子：参数 (...args)
 *       若返回非 undefined 值，则跳过原函数，该返回值作为 result 传给 afterFn
 * @param {Function} afterFn - 后置钩子：参数 (currentResult, ...args)，需返回最终结果
 * @returns {Function} 替换后的新函数
 */

function InstallHook(funcName, context, beforeFn, afterFn, tag = "") {
    // 确定上下文对象
    const ctx = context != null ? context : (typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : global));

    const originalFn = ctx[funcName];
    if (typeof originalFn !== 'function') {
        throw new Error(`[installHook] ${funcName} 不是一个函数，无法 Hook。`);
    }
    if (!hookMap[funcName]) {
        hookMap[funcName] = {
            beforeFnList :{},
            originalFn: ctx[funcName],
            afterFnList: {},
        }
    }
    if (typeof beforeFn === 'function') {
        var name = ""
        if (beforeFn.name) {
            name = beforeFn.name;
        }
        hookMap[funcName].beforeFnList[name + tag] = beforeFn;
    }
    if (typeof afterFn === 'function') {
        var name = ""
        if (afterFn.name) {
            name = afterFn.name;
        }
        hookMap[funcName].afterFnList[afterFn.name + tag] = afterFn;
    }
    // 创建包装函数
    const hookedFn = function (...args) {
        let result;
        let skipOriginal = false;

        // 执行前置钩子
        var beforeResult = undefined;
        for (var [key, before] of Object.entries(hookMap[funcName].beforeFnList) ) {
            beforeResult = before.apply(this, args);
            if (beforeResult !== undefined) {
                result = beforeResult;
                skipOriginal = true;
            }
        }

        // 如果没有被跳过，执行原函数
        if (!skipOriginal) {
            result = hookMap[funcName].originalFn.apply(this, args);
        }
        // 执行后置钩子，允许修改最终结果
        for (var [key, after] of Object.entries(hookMap[funcName].afterFnList)) {
            result = after.call(this, result, ...args);
        }
        return result;


        //// 执行前置钩子
        //if (typeof beforeFn === 'function') {
        //    const beforeResult = beforeFn.apply(this, args);
        //    // 如果 beforeFn 返回非 undefined，则跳过原函数，使用该返回值
        //    if (beforeResult !== undefined) {
        //        result = beforeResult;
        //        skipOriginal = true;
        //    }
        //}



        //// 执行后置钩子，允许修改最终结果
        //if (typeof afterFn === 'function') {
        //    result = afterFn.call(this, result, ...args);
        //}

        return result;
    };

    // 原地替换
    ctx[funcName] = hookedFn;
    // Tampermonkey can wrap @grant none scripts, so DTS-local functions may not be the same binding as window[name].
    // Keep only the original facility hook targets synchronized with their local bindings.
    if (funcName === "PlayerMoved") PlayerMoved = hookedFn;
    if (funcName === "DoPer10Sec") DoPer10Sec = hookedFn;
    if (funcName === "ChargeComplete") ChargeComplete = hookedFn;
    return hookedFn;
}

function DoHook(arg, next, funcBefore, funcAfter) {
    let result;
    let skipOriginal = false;
    if (typeof func === 'function') {
        const beforeResult = funcBefore(args);
        // 如果 beforeFn 返回非 undefined，则跳过原函数，使用该返回值
        if (beforeResult !== undefined) {
            result = beforeResult;
            skipOriginal = true;
        }
    }
    if (!skipOriginal) {
        result = next(args);
    }
    if (typeof funcAfter === 'function') {
        result = funcAfter(result, args);
    }

    return result;
}

function Init() {
    InstallHook("ChatRoomMessage", null, null, ChatRoomMessageRecived)
    InstallHook("ChatRoomMapViewUpdatePlayerFlag", null, null, ChatRoomMapViewUpdatePlayerFlagAfter)
    InstallHook("CanWalk", Player, null, CanWalkAfter)
    InstallHook("IsMounted", Player, null, IsMountedAfter)
    InstallHook("GetBlindLevel", Player, null, GetBlindLevelAfter)
    InstallHook("GetDeafLevel", Player, null, GetDeafLevelAfter)
    InstallHook("CanInteract", Player, null, CanInteractAfter)
    InstallHook("DialogCanUnlock", null, DialogCanUnlockBefore, null)
    InstallHook("SpeechTransformDeafenIntensity", null, SpeechTransformDeafenIntensityBefore, null)
    InstallHook("ChatRoomSendChatMessage", null, ChatRoomSendChatMessageBefore, null)
    InstallHook("ChatRoomPlayerIsAdmin", null, ChatRoomPlayerIsAdminBefore, null)
    InstallHook("ServerShowBeep", null, ServerShowBeepBefore, null)
    InstallHook("ChatRoomFirstTimeHelp", null, ChatRoomFirstTimeHelpBefore, null)

    CommandCombine([
        {
            Tag: "DTS",
            Description: "DroneTrainingSystem",
            Action: function (text) {
                const command = text.split(" ")[0];
                const commandText = text.replace('[', "").replace(']', "").split(" ").slice(1);

                CommandInfo.DoCmd(new CommandInfo(command, commandText));
            },
        },
    ]);
    timeEventInterval = setInterval(() => {
        try {
            if (ChatRoomData) {
                TimeEvent();
            }
        }
        catch {

        }
    }, 1000);
    PlayerDroneInfo();
    initComplete = true
}
function ChatRoomMessageRecived(result, data) {
    // Make sure the message is valid (needs a Sender and Content)
    if ((data != null) && (typeof data === "object") && (data.Content != null) && (typeof data.Content === "string") && (data.Content != "") && (data.Sender != null) && (typeof data.Sender === "number")) {

        // Make sure the sender is in the room
        var SenderCharacter = null;
        for (var C = 0; C < ChatRoomCharacter.length; C++)
            if (ChatRoomCharacter[C].MemberNumber == data.Sender) {
                SenderCharacter = ChatRoomCharacter[C]
                break;
            }

        // If we found the sender
        if (SenderCharacter != null) {

            var pdi = PlayerDroneInfo();
            // Replace < and > characters to prevent HTML injections
            var msg = data.Content;
            while (msg.indexOf("<") > -1) msg = msg.replace("<", "&lt;");
            while (msg.indexOf(">") > -1) msg = msg.replace(">", "&gt;");
            if (data.Content == "DTS" && data.Type == 'Hidden') {
                DoHiddenMessage(SenderCharacter, msg, data.Dictionary);
                return result;
            }
            else if (data.Type == 'Activity') {
                //收到动作时执行
                if (data.Dictionary.length >= 4) {
                    if (typeof data.Dictionary[0].SourceCharacter == 'number' &&
                        typeof data.Dictionary[1].TargetCharacter == 'number' &&
                        data.Dictionary[2].FocusGroupName &&
                        data.Dictionary[3].ActivityName
                    ) {
                        GroupActivityRecvied(data.Dictionary[0].SourceCharacter, data.Dictionary[1].TargetCharacter, data.Dictionary[2].FocusGroupName, data.Dictionary[3].ActivityName)
                    }
                    //if (typeof data.Dictionary[0].SourceCharacter == 'number' &&
                    //    data.Dictionary[1].TargetCharacter == Player.MemberNumber &&
                    //    data.Dictionary[2].FocusGroupName == 'ItemNeck') {
                    //    if (data.Dictionary[0].SourceCharacter == Player.MemberNumber) {
                    //        ShowStatus(pdi);
                    //    }
                    //    else {
                    //        ResponseRequestStatus(SenderCharacter);
                    //    }
                    //}
                }
                //高潮充电
                if (data.Content.startsWith("Orgasm") && data.Dictionary.length >= 1 && typeof data.Dictionary[0].SourceCharacter == 'number') {
                    if (CheckPlayerDroneInfoExistAndIsDrone()) {
                        if (data.Dictionary[0].SourceCharacter == Player.MemberNumber) {
                            SendMessageToSelf("通过本机的高潮为电源补充了一定能量");
                            MsgCmds["BatteryCharge"].Command(null, pdi.orgasmBatteryGet)
                        }
                        else {
                            SendMessageToSelf("通过附近个体的高潮为电源补充了少许能量");
                            MsgCmds["BatteryCharge"].Command(null, pdi.orgasmBatteryGet * 0.1)
                        }
                    }
                    if (data.Dictionary[0].SourceCharacter == Player.MemberNumber) {
                        SelfOrgasmed(data.Content.startsWith("OrgasmResist") || data.Content.startsWith("OrgasmFail"));
                    }

                }


            }
            else if (data.Type == 'Action' && msg == "ServerEnter" && SenderCharacter.MemberNumber == Player.MemberNumber) {
                PlayerEnterRoom();
            }
            else if ((msg.startsWith("ServerLeave")) || (msg.startsWith("ServerDisconnect")) || (msg.startsWith("ServerBan")) || (msg.startsWith("ServerKick"))) {
                if (charaterInstalledScript_isDrone[SenderCharacter.MemberNumber] != undefined) {
                    delete charaterInstalledScript_isDrone[SenderCharacter.MemberNumber];
                }
            }
            var lowerContent = msg.toLowerCase();
            var MemberNumberStr = Player.MemberNumber.toString();
            var reg = new RegExp("(无人机|drone|编号|id) ?" + MemberNumberStr);
            var res = reg.exec(lowerContent);
            if (res != null && CheckPlayerDroneInfoExistAndIsDrone()) {
                DoVoiceCommand(SenderCharacter, msg);
                return result;
            }
        }
    }
}
//param 0:自己->自己 1:别人->自己 2:自己->别人 3:别人->别人
var ActivityFunc = {
    ItemButtSpank: (param, SourceCharacter, TargetCharacter, FocusGroupName, ActivityName) => {
        if (param == 1) {
            if (charaterInstalledScript_isDrone[SourceCharacter] == undefined || charaterInstalledScript_isDrone[SourceCharacter] == false) {
                MissionInfo.ProgressAdd("Spank");
            }
        }
        if (param == 2) {
            if (charaterInstalledScript_isDrone[TargetCharacter] == true) {
                MissionInfo.ProgressAdd("OwnerSpank");
            }
        }
    },
    ItemHeadPet: (param, SourceCharacter, TargetCharacter, FocusGroupName, ActivityName) => {
        if (param == 1) {
            if (charaterInstalledScript_isDrone[SourceCharacter] == undefined || charaterInstalledScript_isDrone[SourceCharacter] == false) {
                MissionInfo.ProgressAdd("PetHead");
                var pdi = new PlayerDroneInfo();
                if (pdi.isDrone && pdi.modifys["training1"] == true) {
                    RequirePoseinfo.RequireDronePose(["Kneel"], 20000);
                }
                if (pdi.isDrone && pdi.modifys["education1"] == true) {
                    if (Math.random() < 0.1) {
                        DoOrgasm(false);
                    }
                }
            }

        }
        if (param == 2) {
            if (charaterInstalledScript_isDrone[TargetCharacter] == true) {
                MissionInfo.ProgressAdd("OwnerPetHead");
            }
        }
    },
    ItemPelvisCaress: (param, SourceCharacter, TargetCharacter, FocusGroupName, ActivityName) => {
        if (param == 1) {
            if (charaterInstalledScript_isDrone[SourceCharacter] == undefined || charaterInstalledScript_isDrone[SourceCharacter] == false) {
                var pdi = new PlayerDroneInfo();
                if (pdi.isDrone && pdi.modifys["training1"] == true) {
                    RequireActivityinfo.RequireDroneActivity([], ["Caress"], 0, 20000, 3);
                }
            }

        }
    },
    ItemMouthPinch: (param, SourceCharacter, TargetCharacter, FocusGroupName, ActivityName) => {
        if (param == 1) {
            if (charaterInstalledScript_isDrone[SourceCharacter] == undefined || charaterInstalledScript_isDrone[SourceCharacter] == false) {
                var pdi = new PlayerDroneInfo();
                if (pdi.isDrone && pdi.modifys["training1"] == true) {
                    RequirePoseinfo.RequireDronePose(["BaseLower", "LegsClosed"], 20000);
                    RequirePoseinfo.RequireDronePose(["BaseUpper"], 20000);
                }
            }

        }
    },
    ItemPelvisPinch: (param, SourceCharacter, TargetCharacter, FocusGroupName, ActivityName) => {
        if (param == 1) {
            if (charaterInstalledScript_isDrone[SourceCharacter] == undefined || charaterInstalledScript_isDrone[SourceCharacter] == false) {
                var pdi = new PlayerDroneInfo();
                if (pdi.isDrone && pdi.modifys["training2"] == true) {
                    RequirePoseinfo.RequireDronePose(["LegsClosed"], 20000);
                    RequirePoseinfo.RequireDronePose(["BackBoxTie", "BackElbowTouch"], 20000);
                }
            }

        }
    },
    Wiggle: (param, SourceCharacter, TargetCharacter, FocusGroupName, ActivityName) => {
        if (param == 3) {
            var pdi = new PlayerDroneInfo();
            if (pdi.isDrone && pdi.modifys["training2"] == true) {
                if (SourceCharacter == TargetCharacter) {
                    var character = ChatRoomGetCharacter(SourceCharacter);
                    if (character != undefined) {
                        if (ChatRoomIsViewActive("Map") && !ChatRoomMapViewCharacterOnInteractionRange(character)) {
                            return;
                        }
                        RequireActivityinfo.RequireDroneActivity([FocusGroupName], ["GaggedKiss"], 2, 20000, 1);

                    }
                }
            }

        }
    },
    ItemNeck: (param, SourceCharacter, TargetCharacter, FocusGroupName, ActivityName) => {
        if (param == 0) {
            ShowStatus(PlayerDroneInfo());
        }
        else if (param == 1){
            ResponseRequestStatus({ MemberNumber: SourceCharacter });
        }
    }
}

function GroupActivityRecvied(SourceCharacter, TargetCharacter, FocusGroupName, ActivityName) {
    var param = (SourceCharacter == Player.MemberNumber ? 0 : 1) + (TargetCharacter == Player.MemberNumber ? 0 : 2)
    if (ActivityFunc[FocusGroupName]) {
        ActivityFunc[FocusGroupName](param, SourceCharacter, TargetCharacter, FocusGroupName, ActivityName);
    }
    if (ActivityFunc[ActivityName]) {
        ActivityFunc[ActivityName](param, SourceCharacter, TargetCharacter, FocusGroupName, ActivityName);
    }
    if (ActivityFunc[FocusGroupName + ActivityName]) {
        ActivityFunc[FocusGroupName + ActivityName](param, SourceCharacter, TargetCharacter, FocusGroupName, ActivityName);
    }
    RequireActivityinfo.CheckAllActivityComplete(SourceCharacter, TargetCharacter, param, FocusGroupName, ActivityName);

}

//var RequireActivity = [
//]

function SelfOrgasmed(Resist) {
    if (Resist) {
        MissionInfo.ProgressAdd("OrgasmResist");
    }
    else {
        MissionInfo.ProgressAdd("Orgasm");
        var pdi = PlayerDroneInfo();
        if (CheckPlayerDroneInfoExistAndIsDrone() && pdi.modifys["education2"] == true) {
            var randindex = Math.floor(Math.random() * 6);
            var targetnum = pdi.bindStatus[bodyPartStrings[randindex]] + 1;
            if (targetnum >= 2) {
                targetnum = 2;
            }
            DoSetBodyOrBindStatus(0, randindex, targetnum, { Name : "愧疚程序"})
        }
    }
}
function PlayerEnterRoom() {
    showedEnterHelp = false;
    charaterInstalledScript_isDrone = new Map();
    ShowPlayerEnterHelp();
}

function DoHiddenMessage(ChatRoomCharacter, msg, dict) {
    if (charaterInstalledScript_isDrone[ChatRoomCharacter.MemberNumber] == undefined) {
        charaterInstalledScript_isDrone[ChatRoomCharacter.MemberNumber] = false;
    }
    MsgInfo.DoCmd(ChatRoomCharacter, dict);
}

function DoVoiceCommand(ChatRoomCharacter, msg) {
    var pdi = PlayerDroneInfo();
    var cmd = findIndices(msg, ["显示状态", "弹出充电曲柄", "高潮奖励", "电击惩罚", "设为", "显示屏发言"]);
    //设为与显示屏发言需要操作员权限
    if (cmd >= 4 && pdi.ownerId != -1 && pdi.ownerId != ChatRoomCharacter.MemberNumber) {
        SendActionText(`不具有对该无人机的操作权限，请联系操作员${pdi.ownerId}以进行操作权限交接`, ChatRoomCharacter);
        return;
    }
    switch (cmd[0]) {
        //显示状态
        case 0: {
            ResponseRequestStatus(ChatRoomCharacter);
        }
            break;
        //弹出充电曲柄
        case 1: {
            if (pdi.battery >= pdi.batteryMax * 0.3) {
                SendActionText(`${ChatRoomCharacter.Name}弹出无人机${pdi.MemberNumber}下体的电源接口内藏的手摇曲柄，由于无人机${target.MemberNumber}已有一定电量，所以曲柄反而自行旋转消耗了大量电量`);
            }
            else {
                SendActionText(`${ChatRoomCharacter.Name}弹出无人机${pdi.MemberNumber}下体的电源接口内藏的手摇曲柄并猛烈转动，动能转化为电能经由阴道流至子宫内的电源，动能与电能让她的机体猛烈颤抖`);
            }
            diff = Math.floor(pdi.batteryMax * 0.3) - pdi.battery;
            SendDTSMsg(pdi, new MsgInfo("BatteryCharge", diff));
            SendDTSMsg(pdi, new MsgInfo("AddArousal", 50));
        }
            break;
        //高潮奖励
        case 2: {
            DoOrgasm();
        }
            break;
        //电击惩罚
        case 3: {
            DoPunishment(pdi.shockLevel, pdi.shoclCount);
        }
            break;
        //设为
        case 4: {
            var params = findIndices(msg, typeDisplayStrings, bodyPartDisplayStrings, bindLevelStrings, bodyLevelStrings, ArousalDisplayStrings)
            switch (params[0]) {
                case 0: {
                    DoSetBodyOrBindStatus(0, params[1], params[2], ChatRoomCharacter);
                    return;
                }
                    break;
                case 1: {
                    DoSetBodyOrBindStatus(1, params[1], params[3], ChatRoomCharacter);
                    return;
                }
                    break;
            }
            switch (params[4]) {
                case 0: {
                    DoSetBodyOrBindStatus(0, 3, params[2], ChatRoomCharacter);
                    return;
                }
                    break;
                case 1: {
                    DoSetBodyOrBindStatus(1, 3, params[2], ChatRoomCharacter);
                    return;
                }
                    break;
            }
        }
            break;
        //显示屏发言
        case 5: {
            var params = findIndices(msg, ["打开", "关闭"]);
            if (params[0] != -1) {
                ResponseSetDisplayTalk(ChatRoomCharacter, params[0] == 0)
            }
        }
            break;
    }

}

function findIndices(str, ...strArrays) {
    var map = strArrays.map(arr =>
        arr.map(s => str.indexOf(s))
    );
    var result = [];
    for (var i = 0; i < map.length; i++) {
        var found = false;
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] != -1) {
                found = true;
                result.push(j);
                break;
            }
        }
        if (found == false) {
            result.push(-1);
        }
    }
    return result;
}

function DoSetBodyOrBindStatus(type, part, level, sender) {
    if (type == -1 || part == -1 || level == -1) return
    var drone = PlayerDroneInfo();
    if (drone[typeStrings[type]] != undefined && drone[typeStrings[type]][bodyPartStrings[part]] != undefined) {
        drone[typeStrings[type]][bodyPartStrings[part]] = level;
        if (part == 3) {
            SendMessageToSelf(`${ArousalDisplayStrings[type]}被${sender.Name}设置为${levelStrings[0][level]}`);
            if (type == 1) {
                DoVibe(level * 2,true);
            }
        }
        else {
            SendMessageToSelf(`${bodyPartDisplayStrings[part] + typeDisplayStrings[type]}被${sender.Name}设置为${levelStrings[type][level]}`);
        }
        RefreshBinds(true);
    }
}

function ChatRoomMapViewUpdatePlayerFlagAfter(result, UpdateTimeOffset) {
    if (PlayerMoved) {
        PlayerMoved();
    }
}
/**
 * 移动后消耗电量
 */
function PlayerMoved() {
    if (CheckPlayerDroneInfoExistAndIsDrone() == false) return;
    var pdi = PlayerDroneInfo();
    pdi.battery -= pdi.moveBatteryCost;
}

function CanWalkAfter(result) {
    if (CheckPlayerDroneInfoExistAndIsDrone() == false) return result;
    var pdi = PlayerDroneInfo();
    var droneResult = !(pdi.battery <= pdi.batteryMax * 0.2 || pdi.bodyStatus.legs >= 1);
    return (result && droneResult)
}

function IsMountedAfter(result) {
    if (CheckPlayerDroneInfoExistAndIsDrone() == false) return result;
    var pdi = PlayerDroneInfo();
    var droneResult = (pdi.battery <= 0 || pdi.bodyStatus.legs >= 2);
    return (result || droneResult);
}

function GetBlindLevelAfter(result) {
    if (CheckPlayerDroneInfoExistAndIsDrone() == false) return result;
    var droneResult = 0;
    var pdi = PlayerDroneInfo();
    if (pdi.battery <= 0 || pdi.bodyStatus.eyes == 2) {
        droneResult = 3.5;
    }
    if (pdi.battery <= pdi.batteryMax * 0.2 || pdi.bodyStatus.eyes == 1) {
        droneResult = 2;
    }
    return Math.max(result, droneResult);
}

function GetDeafLevelAfter(result) {
    if (CheckPlayerDroneInfoExistAndIsDrone() == false) return result;
    var droneResult = 0;
    var pdi = PlayerDroneInfo();
    if (pdi.battery <= 0 || pdi.bodyStatus.ears == 2) {
        droneResult = 7;
    }
    if (pdi.battery <= pdi.batteryMax * 0.2 || pdi.bodyStatus.ears == 1) {
        droneResult = 3;
    }
    return Math.max(result, droneResult);
}

function CanInteractAfter(result) {
    if (isRefreshBinding) {
        return true;
    }
    if (CheckPlayerDroneInfoExistAndIsDrone() == false) return result;
    var pdi = PlayerDroneInfo();
    var droneResult = !(pdi.battery <= pdi.batteryMax * 0.2 || pdi.bodyStatus.hands >= 1);
    return (result && droneResult)
}
function DialogCanUnlockBefore() {
    if (isRefreshBinding) {
        return true;
    }
}

function SpeechTransformDeafenIntensityBefore(C) {
    if (CheckPlayerDroneInfoExistAndIsDrone() == false) return;
    if (C.MemberNumber != Player.MemberNumber) return;
    var pdi = PlayerDroneInfo();
    if (pdi.battery <= 0 || pdi.bodyStatus.mouth == 2) {
        return 20;
    }
    if (pdi.battery <= pdi.batteryMax * 0.2 || pdi.bodyStatus.mouth == 1) {
        return 8;
    }
}

function ChatRoomSendChatMessageBefore(msg) {
    if (CheckPlayerDroneInfoExistAndIsDrone() == false) return;
    var pdi = PlayerDroneInfo();
    if (pdi.battery <= 0) {
        HintBatteryHelp();
        return true;
    }
    if (pdi.disPlayTalk) {
        if (pdi.battery <= 0 || pdi.bodyStatus.mouth == 2) {
            SendActionText("无人机" + Player.MemberNumber + "的指示灯闪烁，尝试发言但失败了");
        }
        else {
            if (pdi.modifys["education1"]) {
                msg.replace(/我|俺|咱|咱家/g, "本机");
                msg.replace(Player.Name, `无人机${Player.MemberNumber}`);
            }
            SendActionText("无人机" + Player.MemberNumber + "的显示器显示：" + msg);
            //ChatRoomSendEmote("无人机" + Player.MemberNumber + "的显示器显示：" + msg);
            pdi.battery -= pdi.chatBatteryCost;
            return true;
        }
    }
}

//在训练设施中失效
function ChatRoomPlayerIsAdminBefore() {
    if (CheckPlayerDroneInfoExistAndIsDrone() == false) return;
    if (ChatRoomData?.MapData?.Objects?.startsWith("ҴӄӃҶұҳҹ") && ChatRoomData?.Name?.startsWith("DroneFacility")) return false;


}

function ServerShowBeepBefore(message, duration, options, title) {
    if (PlayerDroneInfo() === undefined) return;
    if (message.startsWith("DTSBeep")) {
        var memberNumber = -1;
        memberNumber = options.memberNumber;
        var params = message.split(' ');
        if (params.length > 2) {
            MsgInfo.DoBeepCmd(memberNumber, new MsgInfo(params[1], params.slice(2)), options);
        }
        else {
            MsgInfo.DoBeepCmd(memberNumber, new MsgInfo(params[1], null), options);
        }
        return 0;
    }
}

function ChatRoomFirstTimeHelpBefore() {
    if (!ChatRoomHelpSeen) {
        ShowPlayerEnterHelp();
    }

}
function ShowPlayerEnterHelp() {
    if (showedEnterHelp) return;
    if (showChangeLog) {
        SendMessageToSelf(changeLog);
    }
    SendMessageToSelf(`与无人机训练系统的链接已建立，${styleButton("显示状态", ShowStatus)} ${styleButton("可用功能", ShowActionButtons)}`, "", true)
    SendDTSMsg(null, new MsgInfo("HeartBeatPack", { recive: true, isDrone : PlayerDroneInfo().isDrone }));
    showedEnterHelp = true;

    var pdi = PlayerDroneInfo();
    var now = new Date();
    var date = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
    if (date > pdi.lastLoginDate) {
        if (pdi.isDrone) {
            SendMessageToSelf("每日登录奖励5配额点数");
            pdi.coin += 5;
        }
        else {
            SendMessageToSelf("每日登录奖励30配额点数");
            pdi.coin += 30;
        }
        pdi.todaysMission = 0;
        pdi.todaysWork = 0;
        pdi.lastLoginDate = date;
    }
}
/**
 * 显示电量求助提示
 */
function HintBatteryHelp() {
    SendMessageToSelf("电量不足，可向附近玩家" + styleButton("求助", SendBatteryHelp) + "充电");
}

function SendBatteryHelp() {

    SendDTSMsg(null, new MsgInfo("BatteryHelp", null));
}
/**
 * 判断是否为可用无人机
 * @returns
 */
function CheckPlayerDroneInfoExistAndIsDrone() {
    var pdi = PlayerDroneInfo();
    if (pdi === undefined) return false;
    return pdi.isDrone;

}

async function DoPunishment(power, count) {
    if (CheckPlayerDroneInfoExistAndIsDrone() == false) return;
    var pdi = PlayerDroneInfo();
    var itemsCanShock = [];
    for (var bind of shockItems) {
        var geted = InventoryGet(Player, bind.AssetGroup);
        if (geted == null || geted.Asset.Name == bind.Item) {
            geted.Property.ShockLevel = power;
            itemsCanShock.push(geted);
        }
    }
    if (itemsCanShock.length > 0) {
        SendMessageToSelf(`执行惩罚:${power + 1}级电击${count}次`);
        for (var i = 0; i < count; i++) {
            var index = Math.floor((Math.random() * itemsCanShock.length));
            PropertyShockPublishAction(Player, itemsCanShock[index]);
            sleep(300);
        }
        pdi.battery -= pdi.punishBatteryCost;
    }
    else {
        SendMessageToSelf(`未找到可用电击设备，惩罚失败`);
    }
}

function ReqDoPunishment(target) {

    SendDTSMsg(target, new MsgInfo("DoPunishment", null));
}
async function DoVibe(power, skipCheck = false) {
    if (CheckPlayerDroneInfoExistAndIsDrone() == false && !skipCheck) return;
    var itemsCanVibe = [];
    for (var bind of vibeItem) {
        var geted = InventoryGet(Player, bind.AssetGroup);
        var tr = Object.assign({}, geted.Property.TypeRecord)
        if (geted == null || geted.Asset.Name == bind.Item) {
            if (tr.vibrating != undefined) {
                tr.vibrating = power;
            }
            else if (tr.i != undefined) {
                tr.i = power;
            }
            itemsCanVibe.push(geted);
            ExtendedItemSetOptionByRecord(Player, geted, tr);
        }
    }
    if (itemsCanVibe.length > 0) {
        SendMessageToSelf(`震动装置强度设为${power}`);
        RefershPlayerEffect();
    }
    else {
        SendMessageToSelf(`未找到可用震动设备，设置失败`);
    }
}
async function DoOrgasm(showText = true) {
    if (showText) {
        SendMessageToSelf(`执行强制高潮`);
    }
    ActivityTimerProgress(Player, 10);
    ActivityOrgasmPrepare(Player);
}
function ReqDoOrgasm(target) {
    SendDTSMsg(target, new MsgInfo("DoOrgasm", null));
}

/**
 * 定时执行函数
 */
function TimeEvent() {
    secAfterStart += 1;
    //每秒钟执行
    {
        DoPerSec();
    }
    //每10秒钟执行
    if (secAfterStart % 10 == 0) {
        DoPer10Sec();
    }
    //每分钟执行
    if (secAfterStart % 60 == 0) {
        DoPerMin();
    }
    //每10分钟执行
    if (secAfterStart % 600 == 0) {
        DoPer10Min();
    }
    //每小时执行
    if (secAfterStart % 3600 == 0) {
        DoPerHour();
        secAfterStart = 0;
    }
}
var lastBattery = null;
function DoPerSec() {
    RefreshBatteryTag();
    SendBatteryWarning();
    RequireActivityinfo.CheckAllActivityIncomplete();
    RequirePoseinfo.CheckPose();

}
function DoPer10Sec() {

    RefreshBinds();
    if (CheckPlayerDroneInfoExistAndIsDrone()) {
        RefershPlayerEffect();
    }
    ServerPlayerExtensionSettingsSync("DTSbyZajucd");
    SendDTSMsg(null, new MsgInfo("HeartBeatPack", { recive: true, isDrone : PlayerDroneInfo().isDrone }));
    var pdi = PlayerDroneInfo();
    if (pdi.modifys["education2"]) {
        var name = `无人机${Player.MemberNumber}`;
        if (Player.Nickname != name) {
            Player.Nickname = name;
            ServerAccountUpdate.QueueData({ Nickname: name });
        }
    }
}
function DoPerMin() {
    var pdi = PlayerDroneInfo();
    pdi.battery -= pdi.miniteBatteryCost;
    ClearOldMessage();
}
function DoPer10Min() {

}
function DoPerHour() {

}
function RefreshBatteryTag() {
    if (CheckPlayerDroneInfoExistAndIsDrone() == false) return;
    var pdi = PlayerDroneInfo();
    var tag = InventoryGet(Player, "ItemNeckAccessories");
    if (tag?.Property?.Text != undefined) {
        var percent = Math.floor((pdi.battery * 100 / pdi.batteryMax));
        tag.Property.Text = percent.toString();
        if (percent > 50) {
            tag.Color[0] = '#40812c';
        }
        else if (percent > 20) {
            tag.Color[0] = '#cccc33';
        }
        else {
            tag.Color[0] = '#cc3333';
        }
    }
}

function SendBatteryWarning() {
    var pdi = PlayerDroneInfo();
    if (lastBattery == null) {
        lastBattery = pdi.battery;
    }
    if (lastBattery > pdi.batteryMax * 0.2 && pdi.battery <= pdi.batteryMax * 0.2) {
        SendMessageToSelf("无人机当前电量低于20%，进入节电模式");
    }
    if (lastBattery < pdi.batteryMax * 0.2 && pdi.battery >= pdi.batteryMax * 0.2) {
        SendMessageToSelf("无人机当前电量高于20%，解除节电模式");
    }
    if (lastBattery > 0 && pdi.battery <= 0) {
        SendMessageToSelf("无人机当前电量低于0%，停用维生机能外所有机能");
    }
    if (lastBattery < pdi.batteryMax * 0.2 && pdi.battery >= pdi.batteryMax) {
        SendMessageToSelf("无人机当前电量高于0%，启用因电量耗尽停用的机能");
    }
    lastBattery = pdi.battery;
}

var isRefreshBinding = false;
var lastRefreshBindsTime = new Date();
async function RefreshBinds(canRefresh = false) {
    var nowDate = new Date();
    if (nowDate - lastRefreshBindsTime <= 1000) return;
    lastRefreshBindsTime = nowDate;
    if (CheckPlayerDroneInfoExistAndIsDrone() == false) return;
    isRefreshBinding = true;
    try {
        var pdi = PlayerDroneInfo();
        var type = pdi.type;
        if (!type) var type = "BasicDrone";
        var refresh = false;
        var binds = Object.assign([], AllEquipSets[type].Binds);
        var toWear = [];
        if (!binds) var binds = Object.assign([], AllEquipSets["BasicDrone"].Binds);
        for (var bind of binds) {
            var geted = InventoryGet(Player, bind.AssetGroup);
            if (geted == null || geted.Asset.Name != bind.Item || geted.Craft == undefined) {
                toWear.push(bind);
                refresh = true;
            }
        }
        if (refresh) {
            WearEquips(Player, toWear, false);
        }
        for (var part of bodyPartStrings) {
            var settings = Object.assign({}, AllEquipSets[type][part]);
            if (!settings) continue;
            var level = pdi.bindStatus[part];
            var usingSeeting = Object.assign([], settings[level]);;
            for (var bind of usingSeeting) {
                var geted = InventoryGet(Player, bind.AssetGroup);
                var tr = Object.assign({}, geted.Property.TypeRecord)
                for (var typed in bind.TypeRecord) {
                    tr[typed] = bind.TypeRecord[typed];
                }
                ExtendedItemSetOptionByRecord(Player, geted, tr);
                await sleep(100);
            }
        }
        if (refresh || canRefresh) {
            RefershPlayerEffect();
        }
    }
    catch {

    }
    isRefreshBinding = false;
}

function ClearOldMessage() {
    ClearMessageByFunc((child) => {
        if (child?.children[1]?.dataset?.timestamp) {
            var diff = new Date().getTime() - parseInt(child.children[1].dataset.timestamp);
            return diff > 120 * 1000
        }
        else {
            return false;
        }
    });

    //var elements = document.getElementById('TextAreaChatLog').children;

    //for (let i = elements.length - 1; i >= 0; i--) {
    //    var remove = false;
    //    var child = elements[i];
    //    if (child?.children[1]?.dataset?.timestamp) {
    //        var diff = new Date().getTime() - parseInt(child.children[1].dataset.timestamp);
    //        if (diff > 120 * 1000) {
    //            remove = true;
    //        }
    //        else {
    //            remove = false;
    //        }
    //    }
    //    else {
    //        remove = false;
    //    }
    //    if (remove) {
    //        elements[i].remove();
    //    }
    //}
}

function ClearLastMessage() {
    ClearMessageByFunc((child) => {
        return child?.children[1]?.dataset?.clearatnext == "true"
    });

    //var elements = document.getElementById('TextAreaChatLog').children;

    //for (let i = elements.length - 1; i >= 0; i--) {
    //    var remove = false;
    //    var child = elements[i];
    //    if (child?.children[1]?.dataset?.timestamp && child?.children[1]?.dataset?.timestamp != false) {
    //        if (child?.children[1]?.dataset?.clearatnext == "true") {
    //            remove = true;
    //        }
    //        else {
    //            remove = false;
    //        }
    //    }

    //    else {
    //        remove = false;
    //    }
    //    if (remove) {
    //        elements[i].remove();
    //    }
    //}
}

function ClearTagMessage(tag) {
    ClearMessageByFunc((child) => {
        return child?.children[1]?.dataset?.cleartag == tag
    });
    //var elements = document.getElementById('TextAreaChatLog').children;

    //for (let i = elements.length - 1; i >= 0; i--) {
    //    var remove = false;
    //    var child = elements[i];
    //    if (child?.children[1]?.dataset?.timestamp && child?.children[1]?.dataset?.timestamp != false) {
    //        if (child?.children[1]?.dataset?.cleartag == tag) {
    //            remove = true;
    //        }
    //        else {
    //            remove = false;
    //        }
    //    }

    //    else {
    //        remove = false;
    //    }
    //    if (remove) {
    //        elements[i].remove();
    //    }
    //}
}

function ClearAllMessage() {
    ClearMessageByFunc((child) => {return true });
    //var elements = document.getElementById('TextAreaChatLog').children;

    //for (let i = elements.length - 1; i >= 0; i--) {
    //    var remove = false;
    //    var child = elements[i];
    //    if (child?.children[1]?.dataset?.timestamp && child?.children[1]?.dataset?.timestamp != false) {
    //        remove = true;
    //    }

    //    else {
    //        remove = false;
    //    }
    //    if (remove) {
    //        elements[i].remove();
    //    }
    //}
}
function ClearMessageByFunc(func) {
    var elements = document.getElementById('TextAreaChatLog').children;

    for (let i = elements.length - 1; i >= 0; i--) {
        var remove = false;
        var child = elements[i];
        if (child?.children[1]?.dataset?.timestamp != false && child?.children[1]?.dataset?.timestamp != false) {
            if (func(child) == true) {
                remove = true;
            }
            else {
                remove = false;
            }
        }

        else {
            remove = false;
        }
        if (remove) {
            elements[i].remove();
        }
    }
}
function ResponseRequestStatus(sender, param = null) {
    var handle = "RecivedStatus";
    if (param != null) {
        handle = param;
    }
    if (charaterInstalledScript_isDrone[sender.MemberNumber] != undefined) {
        SendDTSMsg(sender, new MsgInfo(handle, PlayerDroneInfo()));
    }
    else if (CheckPlayerDroneInfoExistAndIsDrone()) {
        SendActionText(GetStatusAndVoiceCmdString(), sender);
    }
}


function ResponseBatteryCharge(param) {
    var pdi = PlayerDroneInfo();
    pdi.battery += param;
    if (pdi.battery > pdi.batteryMax) {
        pdi.battery = pdi.batteryMax;
    }
    RefreshBatteryTag();
    RefershPlayerEffect();
}

function ResponseSetDisplayTalk(sender, param) {
    PlayerDroneInfo().disPlayTalk = param;
    SendMessageToSelf(`显示屏发言被${sender.Name}设置为${param ? "开启" : "关闭"}`);
}

function ShowStatus(info = null) {
    if (!info) {
        info = PlayerDroneInfo();
    }
    var playerIsOwner = ((info.ownerId == -1 && info.MemberNumber != Player.MemberNumber) || info.ownerId == Player.MemberNumber)
    var char = ChatRoomCharacter.find(c => c.MemberNumber === info.MemberNumber);
    var { bpm, breathing, temp } = InventoryItemBreastFuturisticBraUpdate(char);
    var progress = 0
    var temp = 37;
    if (char.ArousalSettings && char.ArousalSettings.Progress > 0) {
        temp += (char.ArousalSettings.Progress / 100) * 3;
        progress = char.ArousalSettings.Progress
    }
    var sleepString = ""
    if (info.sleepUntil != null) {
        sleepString +="\n休眠至:"
        sleepString += new Date(info.sleepUntil).toLocaleString();
    }

    var ShowString = ""
    if (info.isDrone) {
        var exString = GetExString(info);
        ShowString =
            `——————基础信息——————
无人机ID:${info.MemberNumber}
无人机型号:${info.type}V${info.level}
配额点数:${info.coin}
剩余电量:${info.battery}/${info.batteryMax}
操作员ID:${info.ownerId == -1 ? '无操作员' : info.ownerId}
系统版本:${info.scriptVersion}${sleepString}
——————生理信息——————
心率:${bpm}BPM
体温:${temp}℃
发情状态:${(breathing === "Action" || breathing === "High") ? "发情中" : "未发情"}
当前快感:${progress}%
快感装置:${bindLevelStrings[info.bodyStatus.body]} ${playerIsOwner ? styleButton("调整", SetStatusHint, info, 1, 3) : ""}
高潮限制:${bindLevelStrings[info.bindStatus.body]} ${playerIsOwner ? styleButton("调整", SetStatusHint, info, 0, 3) : ""}
——————装置信息——————
眼部拘束:${bindLevelStrings[info.bindStatus.eyes]} ${playerIsOwner ? styleButton("调整", SetStatusHint, info, 0, 0) : ""}
耳部拘束:${bindLevelStrings[info.bindStatus.ears]} ${playerIsOwner ? styleButton("调整", SetStatusHint, info, 0, 1) : ""}
口腔拘束:${bindLevelStrings[info.bindStatus.mouth]} ${playerIsOwner ? styleButton("调整", SetStatusHint, info, 0, 2) : ""}
手臂拘束:${bindLevelStrings[info.bindStatus.hands]} ${playerIsOwner ? styleButton("调整", SetStatusHint, info, 0, 4) : ""}
腿脚拘束:${bindLevelStrings[info.bindStatus.legs]} ${playerIsOwner ? styleButton("调整", SetStatusHint, info, 0, 5) : ""}
——————机能信息——————
眼部机能:${bodyLevelStrings[info.bodyStatus.eyes]} ${playerIsOwner ? styleButton("调整", SetStatusHint, info, 1, 0) : ""}
耳部机能:${bodyLevelStrings[info.bodyStatus.ears]} ${playerIsOwner ? styleButton("调整", SetStatusHint, info, 1, 1) : ""}
口腔机能:${bodyLevelStrings[info.bodyStatus.mouth]} ${playerIsOwner ? styleButton("调整", SetStatusHint, info, 1, 2) : ""}
手臂机能:${bodyLevelStrings[info.bodyStatus.hands]} ${playerIsOwner ? styleButton("调整", SetStatusHint, info, 1, 4) : ""}
腿脚机能:${bodyLevelStrings[info.bodyStatus.legs]} ${playerIsOwner ? styleButton("调整", SetStatusHint, info, 1, 5) : ""}
——————可用程序——————${exString}
${styleButton("可用功能", ShowActionButtons, info)}`
    }
    else if (info.isOwner) {
        ShowString =
            `——————基础信息——————
操作员ID:${info.MemberNumber}
操作员权限等级:${info.level}
配额点数:${info.coin}
系统版本:${info.scriptVersion}
——————生理信息——————
心率:${bpm}BPM
体温:${temp}℃
————————————————
${styleButton("可用功能", ShowActionButtons, info)}`
    }
    else {
        ShowString =
            `——————基础信息——————
游客ID:${info.MemberNumber}
配额点数:${info.coin}
系统版本:${info.scriptVersion}
——————生理信息——————
心率:${bpm}BPM
体温:${temp}℃
————————————————
${styleButton("可用功能", ShowActionButtons, info)}`
    }
    SendMessageToSelf(ShowString,"status");
}

function GetExString(info) {

    var exString = ``;
    if (info.modifys["training1"]) {
        exString += `\n服从指令:被操作员摸头时，会切换至服从姿态`
        exString += `\n复位指令:被操作员捏脸颊时，会进行姿态复位`
        exString += `\n自检指令:被操作员抚摸小腹/肚子时，会进行自检流程`
    }
    if (info.modifys["training2"]) {
        exString += `\n待机指令:被操作员捏小腹/肚子时，会切换至待机姿态`
        exString += `\n侍奉指令:操作员摇晃需侍奉的身体部位时，会用口塞亲吻操作员对应部位`
    }
    if (info.modifys["education1"]) {
        exString += `\n奖励程序:被摸头时，有概率会引发高潮`
    }
    if (info.modifys["education2"]) {
        exString += `\n愧疚程序:未能忍耐高潮时，随机部位拘束上升1`
    }
    return exString;
}

function GetStatusAndVoiceCmdString() {
    info = PlayerDroneInfo();
    var playerIsOwner = ((info.ownerId == -1 && info.MemberNumber != Player.MemberNumber) || info.ownerId == Player.MemberNumber)
    var char = ChatRoomCharacter.find(c => c.MemberNumber === info.MemberNumber);
    var { bpm, breathing, temp } = InventoryItemBreastFuturisticBraUpdate(char);
    var progress = 0
    var temp = 37;
    var exString = GetExString(info);
    if (char.ArousalSettings && char.ArousalSettings.Progress > 0) {
        temp += (char.ArousalSettings.Progress / 100) * 3;
        progress = char.ArousalSettings.Progress
    }
    return `——————基础信息——————
无人机ID:${info.MemberNumber}
无人机型号:${info.type}V${info.level}
配额点数:${info.coin}
剩余电量:${info.battery}/${info.batteryMax}
操作员ID:${info.ownerId == -1 ? '无操作员' : info.ownerId}
系统版本:${info.scriptVersion}
——————生理信息——————
心率:${bpm}BPM
体温:${temp}℃
发情状态:${(breathing === "Action" || breathing === "High") ? "发情中" : "未发情"}
当前快感:${progress}%
快感装置:${bindLevelStrings[info.bodyStatus.body]}
高潮限制:${bodyLevelStrings[info.bindStatus.body]}
——————装置信息——————
眼部拘束:${bindLevelStrings[info.bindStatus.eyes]}
耳部拘束:${bindLevelStrings[info.bindStatus.ears]}
口腔拘束:${bindLevelStrings[info.bindStatus.mouth]}
手臂拘束:${bindLevelStrings[info.bindStatus.hands]}
腿脚拘束:${bindLevelStrings[info.bindStatus.legs]}
——————机能信息——————
眼部机能:${bodyLevelStrings[info.bodyStatus.eyes]}
耳部机能:${bodyLevelStrings[info.bodyStatus.ears]}
口腔机能:${bodyLevelStrings[info.bodyStatus.mouth]}
手臂机能:${bodyLevelStrings[info.bodyStatus.hands]}
腿脚机能:${bodyLevelStrings[info.bodyStatus.legs]}
——————语音指令——————
无人机${info.MemberNumber} 显示状态
无人机${info.MemberNumber} (眼部|耳部|口腔|手臂|腿脚)拘束设为(关闭|激活|最大)
无人机${info.MemberNumber} (眼部|耳部|口腔|手臂|腿脚)机能设为(可用|限制|离线)
无人机${info.MemberNumber} (打开|关闭)显示屏发言
无人机${info.MemberNumber} 快感装置设为(关闭|激活|最大)
无人机${info.MemberNumber} 高潮限制设为(关闭|激活|最大)
无人机${info.MemberNumber} 高潮奖励
无人机${info.MemberNumber} 电击惩罚
无人机${info.MemberNumber} 弹出充电曲柄
注意:如果无人机不具备听力(如耳部机能限制或电量低于20的情况)的话无法正常使用语音指令，可尝试发送 *指令内容 或 (指令内容) 来绕过听力限制
——————可用程序——————${exString}
`

}
function ShowActionButtons(info = null) {
    var string = "";
    if (!info) {
        info = PlayerDroneInfo();
    }
    //对自己
    if (info.MemberNumber == Player.MemberNumber) {
        if (info.isDrone) string = ShowStringsToSelf(0, info);
        else if (info.isOwner) string =  ShowStringsToSelf(1, info);
        else string = ShowStringsToSelf(2, info);
    }
    //对其它人
    else {
        var pdi = PlayerDroneInfo();
        if (pdi.isDrone) {
            if (info.isDrone) string = ShowStringsToOther(0, info);
            else if (info.MemberNumber == pdi.ownerId) string = ShowStringsToOther(1, info);
            else string = ShowStringsToOther(2, info);
        }
        else if (pdi.isOwner) {
            if (info.isDrone) string = ShowStringsToOther(3, info);
            else string = ShowStringsToOther(5, info);
        }
        else {
            if (info.isDrone) string = ShowStringsToOther(4, info);
            else string = ShowStringsToOther(5, info);
        }
    }
    SendMessageToSelf(string, "actions");
}

function ShowStringsToSelf(index, info) {
    var pdi = PlayerDroneInfo();
    switch (index) {
        case 0:
            return `本机可用功能:
显示本机状态:${styleButton("执行", ShowStatus)}
查找单位状态:${styleButton("执行", FindPlayerHint)}
显示携带道具:${styleButton("执行", ShowItemsList)}
显示任务进度:${styleButton("执行", ShowMissionProcess)}
发送充电求助:${styleButton("执行", SendBatteryHelp)}
移动至训练设施:${styleButton("执行", GoToFacility)}
呼叫救援脱困:${styleButton("执行", ExitFromStack)}
再次显示该界面:${styleButton("执行", ShowActionButtons)}`;
        case 1:
            return `操作员可用功能:
显示操作员状态:${styleButton("执行", ShowStatus)}
查找单位状态:${styleButton("执行", FindPlayerHint)}
显示携带道具:${styleButton("执行", ShowItemsList)}
显示任务进度:${styleButton("执行", ShowMissionProcess)}
注销操作员身份:${styleButton("执行", SetIdentityHint, info, false, true)}
移动至训练设施:${styleButton("执行", GoToFacility)}
呼叫救援脱困:${styleButton("执行", ExitFromStack)}
再次显示该界面:${styleButton("执行", ShowActionButtons)}`;
        case 2:
            return `游客可用功能:
显示自身状态:${styleButton("执行", ShowStatus)}
查找单位状态:${styleButton("执行", FindPlayerHint)}
注册成为无人机:${styleButton("执行", SetIdentityHint, info, true, false)}
注册成为操作员:${styleButton("执行", SetIdentityHint, info, false, false)}
移动至训练设施:${styleButton("执行", GoToFacility)}
呼叫救援脱困:${styleButton("执行", ExitFromStack)}
再次显示该界面:${styleButton("执行", ShowActionButtons)}`;
        default:
            return "";
    }
}

function ShowStringsToOther(index, info) {
    switch (index) {
        case 0: // 无人机对无人机
            return `对该单位可用功能:
显示单位状态:${styleButton("执行", DoFindTatget, info)}
发送任务求助:${styleButton("执行", SendMissionHelp, info)}
分享电量:${styleButton("执行", DoBatteryHelp, info, 0)}
再次显示该界面:${styleButton("执行", ShowActionButtons, info)}`;
        case 1: // 无人机对自身操作员
            return `对该单位可用功能:
显示单位状态:${styleButton("执行", DoFindTatget, info)}
发送任务求助:${styleButton("执行", SendMissionHelp, info)}
再次显示该界面:${styleButton("执行", ShowActionButtons, info)}`;
        case 2: // 无人机对非自身操作员或游客
            return `对该单位可用功能:
显示单位状态:${styleButton("执行", DoFindTatget, info)}
发送任务求助:${styleButton("执行", SendMissionHelp, info)}
再次显示该界面:${styleButton("执行", ShowActionButtons, info)}`;
        case 3: // 操作员对无人机
            return `对该单位可用功能:
显示单位状态:${styleButton("执行", DoFindTatget, info)}
显示语音指令:${styleButton("执行", ShowVoiceCommand, info)}
电击惩罚:${styleButton("执行", ReqDoPunishment, info)}
高潮奖励:${styleButton("执行", ReqDoOrgasm, info)}
设置任务:${styleButton("执行", SetMissionToDrone, info)}
接入充电装置:${styleButton("执行", DoBatteryHelp, info, 1)}
手摇曲柄充电:${styleButton("执行", DoBatteryHelp, info, 2)}
设置显示屏发言:${styleButton("执行", SetDisplayTalk, info)}
要求控制权限:${styleButton("执行", SetIdentityHint, info, true, false)}
清除控制权限:${styleButton("执行", SetIdentityHint, info, true, true)}
废弃该无人机:${styleButton("执行", () => { SendMessageToSelf("开发中") })}
再次显示该界面:${styleButton("执行", ShowActionButtons, info)}`;
        case 4: // 游客对无人机
            return `对该单位可用功能:
显示单位状态:${styleButton("执行", DoFindTatget, info)}
显示语音指令:${styleButton("执行", ShowVoiceCommand, info)}
电击惩罚:${styleButton("执行", ReqDoPunishment, info)}
高潮奖励:${styleButton("执行", ReqDoOrgasm, info)}
设置任务:${styleButton("执行", SetMissionToDrone, info)}
手摇曲柄充电:${styleButton("执行", DoBatteryHelp, info, 2)}
设置显示屏发言:${styleButton("执行", SetDisplayTalk, info)}
再次显示该界面:${styleButton("执行", ShowActionButtons, info)}`;
        case 5: // 操作员或游客对操作员或游客
            return `对该单位可用功能:
显示单位状态:${styleButton("执行", DoFindTatget, info)}
再次显示该界面:${styleButton("执行", ShowActionButtons, info)}`;
        default:
            return "";
    }
}

function ShowItemsList() {
    var pdi = PlayerDroneInfo();
    var string = "道具列表："
    for (var item of pdi.items) {
        string += "\n";
        string += item.text;
        if (item.use != null) {
            if (item.param.length == 0) {
                string += styleButton("使用", () => {
                    ItemInfo[item.use](item);
                    ShowItemsList();
                });
            }
            else {
                string += "\n";
                for (var p of item.param) {
                    string += styleButton(p.name, (id) => {
                        ItemInfo[item.use](item, id);
                        ShowItemsList();
                    }, p.id);
                }
            }
        }
        string += styleButton("丢弃", (item) => { ItemInfo.RemoveThis(item);; ShowItemsList(); }, item);
    }
    SendMessageToSelf(string,"items", false);
}


function ShowMissionProcess() {
    var pdi = PlayerDroneInfo();
    ShowMissionsString(pdi.missions,"任务列表：");
}

function ShowMissionsString(missions,head) {
    var string = head;
    for (var mission of missions) {
        string += "\n";
        string += mission.text + ":" + mission.desc;
        if (mission.target != undefined && mission.progress != undefined) {
            string += `(${mission.progress}/${mission.target})`;
        }
    }
    SendMessageToSelf(string, "missions", false);

}

function FindPlayerHint() {
    var input = (document.getElementById("InputChat"));
    input.value = '/DTS findtarget []'
    SendMessageToSelf("请在方括号内输入目标ID并发送指令，或触摸目标项圈(包括自身)");
}
function DoFindTatget(target, param = null) {
    SendDTSMsg(target, new MsgInfo("RequestStatus", param));
}

function SendMissionHelp(info) {
    SendDTSMsg(info, new MsgInfo("SendMissionHelp", Object.assign([], PlayerDroneInfo().missions)))
    SendMessageToSelf("已发送任务协助请求");
}

//WIP
function SetMissionToDrone(info) {
    SendDTSMsg(info, new MsgInfo("PutMission", null));
    SendMessageToSelf("已发送任务设置指令");
}

async function GoToFacility() {
    if (ChatRoomData?.MapData?.Objects?.startsWith("ҴӄӃҶұҳҹ") && ChatRoomData?.Name?.startsWith("DroneFacility")) {
        SendMessageToSelf(`位于训练设施中，无需移动`);
        return;
    }
    const SearchData = {
        Query: "DroneFacility".toUpperCase().trim(),
        Language: ChatSearchLanguage,
        Space: ChatSearchGetSpace() ?? "",
        Game: ChatSearchGame,
        FullRooms: Player.ChatSearchSettings.FullRooms,
        ShowLocked: Player.ChatSearchSettings.ShowLocked,
        MapTypes: Player.ChatSearchSettings.MapTypes ? [Player.ChatSearchSettings.MapTypes] : [],
        SearchDescs: Player.ChatSearchSettings.SearchDescriptions,
    };
    var result = await ServerRoomSearch("DroneFacility", SearchData)
    if (result.error == null && result.value.length > 0) {
        for (var room of result.value) {
            var result = ChatSearchGridRoomCanJoin(room);
            if (result) {
                await JoinRoom(room.Name);
                SendMessageToSelf(`已到达训练设施`);
                return;
            }
        }
    }
    else if (ChatRoomData.Admin.indexOf(Player.MemberNumber) != -1) {
        SendMessageToSelf(`未找到可用房间，是否将当前房间更新为训练设施（当前房间所有设置会丢失）${styleButton("是", () => {
            ClearAllMessage();
            InitMapFaci();
        })}${styleButton("否", () => {
            ClearTagMessage("GoToFacilityClear");
        })}`, "GoToFacilityClear");
        return
    }
    SendMessageToSelf(`未找到可用房间`);


}

async function ExitFromStack() {
    var pdi = PlayerDroneInfo();
    if (pdi.isDrone) {
        SendMessageToSelf(`无人机呼叫救援需要20信用配额，不足20会扣至负数，${styleButton("执行", DoExitFromStack,20)}`);
    }
    else {
        SendMessageToSelf(`呼叫救援需要5信用配额，不足5会扣至负数，${styleButton("执行", DoExitFromStack,20)}`);
    }
}

async function DoExitFromStack(price) {
    var pdi = PlayerDroneInfo();
    SendMessageToSelf(styleProgressBar("呼叫中", "已完成", 120 * 1000, async () =>
    {
        RemoveRestrains(Player);
        await sleep(1000);
        await RefreshBinds(true);
        await sleep(1000);
        if (ChatRoomData?.MapData?.Objects?.startsWith("ҴӄӃҶұҳҹ")) {
            MovePlayer({ X: 1, Y: 37 });
        }
        pdi.coin -= price;
    }))
}

async function JoinRoom(RoomName) {
    await ChatRoomAttemptLeave();
    await sleep(1000);
    await ServerRoomJoin(RoomName);
    await sleep(1000);
    await waitFor(() => { return ChatRoomData != null })
}
var missionLists = [
    ["StockRoomMission", "OrgasmMission", "SpankMission", "PetHeadMission", "ChargeMission"],
    ["StockRoomMission", "OwnerSpankMission", "OwnerPetHeadMission"],
]

function GetMission(pdi, missionStr = null) {
    var index = -1;
    if (missionStr != null) {
        index = missionLists[pdi.isDrone ? 0 : 1].findIndex(missionStr);
    }
    if (index == -1) {
        index = Math.floor(Math.random() * missionLists[pdi.isDrone ? 0 : 1].length);
    }
    var mission = MissionInfo[missionLists[pdi.isDrone ? 0 : 1][index]]();
    return mission;
}

function TakeMission(missionStr = null) {
    var pdi = PlayerDroneInfo();
    if (pdi.todaysMission >= pdi.missionsMax) {
        SendMessageToSelf("每日接取任务次数已满，无法接取", "WorkRoom")
        return;
    }
    if (pdi.missions.length >= pdi.missionsMax) {
        SendMessageToSelf("已接取任务已满，无法接取", "WorkRoom")
        return;
    }
    var mission = GetMission(pdi, missionStr);
    pdi.missions.push(mission);
    pdi.todaysMission++;
    SendMessageToSelf(`已接取任务：${mission.text}`, "WorkRoom")
}

function SetDisplayTalk(info) {
    SendDTSMsg(info, new MsgInfo("SetDisplayTalk", !info.disPlayTalk));
    SendMessageToSelf("已发送指令将目标无人机显示屏发言设为" + (info.disPlayTalk ? "关闭" : "开启"));
}

function ShowVoiceCommand(info = null) {
    if (!info) {
        info = { MemberNumber: "(目标ID)" }
    }
    SendMessageToSelf(`
——————语音指令——————
无人机${info.MemberNumber} 显示状态
无人机${info.MemberNumber} (眼部|耳部|口腔|手臂|腿脚)拘束设为(关闭|激活|最大)
无人机${info.MemberNumber} (眼部|耳部|口腔|手臂|腿脚)机能设为(可用|限制|离线)
无人机${info.MemberNumber} (打开|关闭)显示屏发言
无人机${info.MemberNumber} 快感装置设为(关闭|激活|最大)
无人机${info.MemberNumber} 高潮限制设为(关闭|激活|最大)
无人机${info.MemberNumber} 高潮奖励
无人机${info.MemberNumber} 电击惩罚
无人机${info.MemberNumber} 弹出充电曲柄
注意:如果无人机不具备听力(如耳部限制或电量低于20)的话无法正常接收语音指令，可尝试发送 *指令内容 或 (指令内容) 来绕过听力限制`)
}

/**
 * type:0为平均电量,1为充满电,2为充20%电
 * @param {any} target
 * @param {any} type
 * @returns
 */
function DoBatteryHelp(target, type) {
    var char = ChatRoomCharacter.find(c => c.MemberNumber === target.MemberNumber);
    if (!char) {
        SendMessageToSelf("目标已丢失");
        return;
    }
    if (ChatRoomIsViewActive("Map") && !ChatRoomMapViewCharacterOnInteractionRange(char)) {
        SendMessageToSelf("与目标距离过远");
        return;
    }
    var diff = 0;
    var pdi = PlayerDroneInfo();
    switch (type) {
        case 0: {
            SendActionText(`无人机${Player.MemberNumber}与无人机${target.MemberNumber}的小腹贴在一起，子宫内的电源开始传输充电，微弱的电流让她们的机体轻微颤抖`);

            SendMessageToSelf("已完成电量分享");
            diff = (Math.floor((target.battery + pdi.battery) / 2)) - target.battery;
            pdi.battery -= diff;
            SendDTSMsg(target, new MsgInfo("BatteryCharge", diff));
            SendDTSMsg(target, new MsgInfo("AddArousal", 10));
            ActivityTimerProgress(Player, 10);

            RefreshBatteryTag();
            RefershPlayerEffect();
        }
            break;
        case 1: {
            SendActionText(`${Player.Name}将电源线接入无人机${target.MemberNumber}下体的电源接口，电流经由阴道流至子宫内的电源，电流让她的机体颤抖`);
            SendMessageToSelf("已完成充电");
            diff = target.batteryMax - target.battery;
            SendDTSMsg(target, new MsgInfo("BatteryCharge", diff));
            SendDTSMsg(target, new MsgInfo("AddArousal", 30));
        }
            break;
        case 2: {
            if (pdi.battery >= pdi.batteryMax * 0.3) {
                SendActionText(`${Player.Name}弹出无人机${target.MemberNumber}下体的电源接口内藏的手摇曲柄，由于无人机${target.MemberNumber}已有一定电量，所以曲柄反而自行旋转消耗了大量电量`);

            }
            else {
                SendActionText(`${Player.Name}弹出无人机${target.MemberNumber}下体的电源接口内藏的手摇曲柄并猛烈转动，动能转化为电能经由阴道流至子宫内的电源，动能与电能让她的机体猛烈颤抖`);
            }
            SendMessageToSelf("已完成充电");
            diff = Math.floor(target.batteryMax * 0.3) - target.battery;
            SendDTSMsg(target, new MsgInfo("BatteryCharge", diff));
            SendDTSMsg(target, new MsgInfo("AddArousal", 50));
        }
            break;
    }
}
function GetDistance(Pos, Pos2) {
    return Math.abs(Pos.X - Pos2.X) + Math.abs(Pos.Y - Pos2.Y);
}

function SetIdentityHint(target, isSetDrone, isUndo) {
    var pdi = PlayerDroneInfo();
    if (target.MemberNumber == Player.MemberNumber && isSetDrone && isUndo && pdi.isDrone) {
        SendMessageToSelf("无人机无权注销自身身份，执行惩罚");
        DoPunishment(2, 3);
        return;
    }
    if (pdi.ownerId != -1 && pdi.ownerId != target.MemberNumber) {
        SendMessageToSelf("无人机无权自主更改操作员，执行惩罚");
        DoPunishment(2, 3);
        return;
    }
    if (target.MemberNumber == Player.MemberNumber) {
        if (isSetDrone && !isUndo && !target.isDrone) {
            SendMessageToSelf(`即将接受无人机化改造，点击按钮以${styleButton("确认", SetToDrone, target, isUndo)}`);
            return;
        }
        if (!isSetDrone && !isUndo && !target.isOwner) {
            SendMessageToSelf(`即将注册为操作员，点击按钮以${styleButton("确认", SetToOwner, target, isUndo)}`);
            return;
        }
        if (!isSetDrone && isUndo && target.isOwner) {
            SendMessageToSelf(`即将注销操作员身份，点击按钮以${styleButton("确认", SetToOwner, target, isUndo)}`);
            return;
        }
    }
    else {
        if (target.ownerId == -1 || target.ownerId == Player.MemberNumber) {
            if (isSetDrone && !isUndo && target.isDrone) {
                SendMessageToSelf(`即将向其要求控制权限，点击按钮以${styleButton("确认", SetToDrone, target, isUndo)}`);
                return;
            }
            if (isSetDrone && isUndo && target.isDrone) {
                SendMessageToSelf(`即将清除对其的控制权限，点击按钮以${styleButton("确认", SetToDrone, target, isUndo)}`);
                return;
            }
        }
        else {
            SendMessageToSelf(`不具有对该无人机的操作权限，请联系操作员${target.ownerId}以进行操作权限交接`);
        }

    }
}

function SetToDrone(target, isUndo) {
    if (target.MemberNumber == Player.MemberNumber) {
        if (!isUndo) {
            StartDrone();
        }
    }
    else {
        SendDTSMsg(target, new MsgInfo("ReqOwnerRight", isUndo));
        SendMessageToSelf(`已发送指令`);
    }
}

function SetToDroneAccept(targetChar) {
    PlayerDroneInfo().ownerId = targetChar.MemberNumber;
    SendDTSMsg(targetChar, new MsgInfo("RespOwnerRight", false));
}

//WIP
async function StartDrone() {
    var waitTime = 2000;
    SendMessageToSelf(`接收来自素体到无人机注册请求，开始无人机化改造流程`);
    await sleep(waitTime);
    SendMessageToSelf(`开始部署改造单元\n${styleProgressBar("正在部署", "部署完成", waitTime)}`);
    await sleep(waitTime);
    WearEquips(Player, [Crate]);
    SendMessageToSelf(`改造单元部署完成，素体收容完成`);
    await sleep(waitTime);
    SendMessageToSelf(`开始喷射溶解液\n${styleProgressBar("正在喷射", "喷射完成", waitTime)}`);
    await sleep(waitTime);
    RemoveClothes(Player, false);
    var group = Object.assign([], AssetGroup);
    group = group.filter(item => item.Name !== "ItemDevices");
    RemoveRestrainsWithAssetGroup(Player, group);
    RefershPlayerEffect();
    SendMessageToSelf(`素体服装与拘束溶解完成`);
    await sleep(waitTime);
    SendMessageToSelf(`开始拘束素体\n${styleProgressBar("正在拘束", "拘束完成", waitTime)}`);
    await sleep(waitTime);
    ExtendedItemSetOptionByRecord(Player, InventoryGet(Player, Crate.AssetGroup), {
        "w": 1,
        "l": 3,
        "a": 3,
        "d": 0,
        "t": 0,
        "h": 0
    });
    await sleep(waitTime);
    SendMessageToSelf(`素体拘束完成`);
    await sleep(waitTime);
    SendMessageToSelf(`开始喷涂乳胶涂层\n${styleProgressBar("正在喷涂", "喷涂完成", waitTime)}`);
    await sleep(waitTime);
    WearEquips(Player, BasicDroneBinds.slice(0, 2));
    SendMessageToSelf(`乳胶涂层喷涂完成`);
    await sleep(waitTime);
    SendMessageToSelf(`开始安装总电源\n${styleProgressBar("正在安装", "安装失败", waitTime)}`);
    await sleep(waitTime);
    SendMessageToSelf(`无法顺利安装总电源，推测原因:紧张情绪导致的素体骨骼肌异常震颤与阴道不通畅`);
    await sleep(waitTime);
    SendMessageToSelf(`开始安装体态控制装置\n${styleProgressBar("正在安装", "安装完成", waitTime)}`);
    await sleep(waitTime);
    WearEquips(Player, BasicDroneBinds.slice(2, 4));
    SendMessageToSelf(`体态控制装置已植入素体肩部、背部、腹部，安装完成`);
    await sleep(waitTime);
    SendMessageToSelf(`体态控制装置通过外接电源启动，主动抑制素体骨骼肌震颤\n${styleProgressBar("正在启动", "启动完成", waitTime)}`);
    await sleep(waitTime);
    SendMessageToSelf(`开始安装总电源,向阴道内插入总电源安装管`);
    ExtendedItemSetOptionByRecord(Player, InventoryGet(Player, Crate.AssetGroup), {
        "w": 1,
        "l": 3,
        "a": 3,
        "d": 1,
        "t": 0,
        "h": 0,
        "d1": 0
    });
    await sleep(waitTime);
    ActivityTimerProgress(Player, 10);
    SendMessageToSelf(`阴道扩张顺畅，进一步插入总电源安装管`);
    await sleep(waitTime)
    ActivityTimerProgress(Player, 10);
    SendMessageToSelf(`总电源安装管已到达子宫口，开始向子宫内置入总电源\n${styleProgressBar("正在置入", "置入完成", waitTime)}`);
    await sleep(waitTime)
    ActivityTimerProgress(Player, 10);
    SendMessageToSelf(`总电源置入成功，开始向总电源内注入电池液\n${styleProgressBar("正在注入", "正在注入", waitTime)}`);
    await sleep(waitTime)
    ActivityTimerProgress(Player, 10);
    SendMessageToSelf(`注入顺畅，总电源膨胀率增长良好\n${styleProgressBar("正在注入", "注入异常", waitTime)}`);
    await sleep(waitTime)
    ActivityTimerProgress(Player, 10);
    SendMessageToSelf(`检测到总电源膨胀受阻，推测原因:总电源已膨胀至填满子宫`);
    await sleep(waitTime)
    ActivityTimerProgress(Player, 10);
    SendMessageToSelf(`加大电池液注入压强，总电源膨胀率增长缓慢\n${styleProgressBar("正在注入", "注入完成", waitTime)}`);
    await sleep(waitTime)
    ActivityTimerProgress(Player, 10);
    SendMessageToSelf(`电池液注入完毕，总电源已达到最大膨胀，封闭总电源注入口，接入电源接口`);
    await sleep(waitTime)
    ActivityTimerProgress(Player, 10);
    WearEquips(Player, BasicDroneBinds.slice(4, 5));
    ExtendedItemSetOptionByRecord(Player, InventoryGet(Player, Crate.AssetGroup), {
        "w": 1,
        "l": 3,
        "a": 3,
        "d": 0,
        "t": 0,
        "h": 0
    });
    SendMessageToSelf(`总电源安装管退出，电源接口已膨胀至填充全部阴道，总电源安装完成，进行高潮充能测试`);
    await sleep(waitTime);
    DoOrgasm();
    await sleep(waitTime * 3);
    SendMessageToSelf(`总电源电量填充成功，高潮充能测试完成`);

    await sleep(waitTime);
    SendMessageToSelf(`开始安装内循环系统控制装置\n${styleProgressBar("正在安装", "安装完成", waitTime)}`);
    await sleep(waitTime);
    WearEquips(Player, BasicDroneBinds.slice(5, 9));
    SendMessageToSelf(`内循环系统控制装置已植入素体乳头、阴蒂、肛门，安装完成`);


    await sleep(waitTime);
    SendMessageToSelf(`开始安装内循环系统控制装置总控系统与生理信息监控装置\n${styleProgressBar("正在安装", "安装完成", waitTime)}`);
    await sleep(waitTime);
    WearEquips(Player, BasicDroneBinds.slice(9, 11));
    SendMessageToSelf(`总控系统已植入素体小腹，安装完成，生理信息监控装置已植入素体胸口，安装完成，进行功能测试`);
    await sleep(waitTime);
    DoVibe(2, true);
    SendMessageToSelf(`内循环系统控制装置启动，震动功能良好，生理信息监控装置已检测到体温与心率的上升，监测功能良好`);


    await sleep(waitTime);
    SendMessageToSelf(`开始安装运动控制装置\n${styleProgressBar("正在安装", "安装完成", waitTime)}`);
    await sleep(waitTime);
    WearEquips(Player, BasicDroneBinds.slice(11, 16));
    SendMessageToSelf(`运动控制装置已植入素体手部、臂部、腿部、脚踝、足部，安装完成`);

    await sleep(waitTime);
    SendMessageToSelf(`开始个体识别装置\n${styleProgressBar("正在安装", "安装完成", waitTime)}`);
    await sleep(waitTime);
    WearEquips(Player, BasicDroneBinds.slice(16, 17));
    SendMessageToSelf(`个体识别装置已植入面部，安装完成，开始在个体识别装置上印刷无人机ID`);


    await sleep(waitTime);
    SendMessageToSelf(`检测到素体异常动作，推测原因:素体缺氧导致的恐慌`);
    await sleep(waitTime);
    SendMessageToSelf(`启动运动控制装置，主动抑制素体异常动作\n${styleProgressBar("正在启动", "启动完成", waitTime)}`);


    await sleep(waitTime);
    SendMessageToSelf(`开始在个体识别装置上安装视觉、听觉、消化、呼吸系统外部接口\n${styleProgressBar("正在安装", "安装完成", waitTime)}`);
    await sleep(waitTime);
    WearEquips(Player, BasicDroneBinds.slice(17, 21));
    SendMessageToSelf(`外部接口安装完成，素体异常动作缓和`);


    await sleep(waitTime);
    SendMessageToSelf(`开始安装显示器与信号接收器\n${styleProgressBar("正在安装", "安装完成", waitTime)}`);
    await sleep(waitTime);
    WearEquips(Player, BasicDroneBinds.slice(21, 24));
    SendMessageToSelf(`显示器安装完成，信号接收器安装完成`);

    await sleep(waitTime);
    SendMessageToSelf(`所有装置安装完成，无人机注册完成，开始无人机教育程序`);
    await sleep(waitTime);
    SendMessageToSelf(`@$@##$%$%$\n${styleProgressBar("@$@##", "$%$%$", waitTime)}`);
    await sleep(waitTime);
    SendMessageToSelf(`#@#%$##$%%\n${styleProgressBar("#@#%", "##$%%", waitTime)}`);
    await sleep(waitTime);
    SendMessageToSelf(`#@$%#@$%#@\n${styleProgressBar("#@$%#", "@$%#@", waitTime)}`);
    await sleep(waitTime);
    SendMessageToSelf(`@#$$$%%%$$\n${styleProgressBar("@#$$$", "%%%$$", waitTime)}`);
    await sleep(waitTime);
    SendMessageToSelf(`#$%%%$%$$@\n${styleProgressBar("#$%%%", "$%$$@", waitTime)}`);
    await sleep(waitTime);
    SendMessageToSelf(`@@@#%$#@@%\n${styleProgressBar("@@@#%", "$#@@%", waitTime)}`);
    await sleep(waitTime);
    SendMessageToSelf(`无人机教育程序完成，无人机化改造流程已全部完成，放出无人机`);
    InventoryRemove(Player, Crate.AssetGroup);
    RefershPlayerEffect();

    PlayerDroneInfo().isDrone = true;
    SendDTSMsg(sender, new MsgInfo("HeartBeatPack", { recive: false, isDrone: PlayerDroneInfo().isDrone }));

}
function SetToOwner(target, isUndo) {
    if (target.MemberNumber == Player.MemberNumber) {
        PlayerDroneInfo().isOwner = !isUndo;
        SendMessageToSelf(`已${isUndo ? "注销" : "注册为"}操作员身份`);
    }
}
function SetStatusHint(info, type, part) {
    var buttons = []
    var textType = type;
    if (part == 3) {
        textType = 0;
    }
    for (var i = 0; i < 3; i++) {
        buttons.push(styleButton(levelStrings[textType][i], SetStatusSend, info, type, part, i));
    }
    SendMessageToSelf("设为" + buttons[0] + buttons[1] + buttons[2])

}

function SetStatusSend(info, type, part, level) {
    if ((type == 1 && info.bodyStatusMax[bodyPartStrings[part]] < level) && part != 3) {
        SendMessageToSelf("当前无人机该部位未接受改造，无法设置为指定状态");
        return;
    }
    SendDTSMsg(info, new MsgInfo("SetStatus", [type, part, level]));
    SendMessageToSelf("已发送设置指令");

}

class MsgInfo {

    constructor(type, param) {
        this.type = type;
        this.param = param;
    }
    static DoCmd(sender, msgInfo) {
        MsgCmds[msgInfo.type].Command(sender, msgInfo.param)
    }
    static DoBeepCmd(MemberNumber, msgInfo, options) {
        BeepCmds[msgInfo.type].Command(MemberNumber, msgInfo.param, options)
    }

}

class CommandInfo {
    constructor(command, commandText) {
        this.command = command;
        this.commandText = commandText;
    }
    static DoCmd(commandInfo) {
        CommandsAction[commandInfo.command].Command(commandInfo.commandText);
    }
}
function SendDTSMsg(targetPlayer, Dict) {
    if (targetPlayer) {
        ServerSend("ChatRoomChat", { Content: "DTS", Type: "Hidden", Dictionary: Dict, Target: targetPlayer.MemberNumber });
    }
    else {
        ServerSend("ChatRoomChat", { Content: "DTS", Type: "Hidden", Dictionary: Dict });
    }
}

function IsInZone(Pos, Zone) {
    var isIn = false;
    for (let areaKey in Zone.Areas) {
        if (IsInArea(Pos, Zone.Areas[areaKey])) {
            isIn = areaKey;
            break;
        }
    }
    if (isIn) {
        for (let areaKey in Zone.Exclude) {
            if (IsInArea(Pos, Zone.Exclude[areaKey])) {
                isIn = false;
                break;
            }
        }
    }
    return isIn;
}
function IsInArea(Pos, Area) {
    var isIn = false;
    if (Area.X != undefined) {
        isIn = IsAtTile(Pos, Area);
    }
    else if (Area.leftUp != undefined) {
        isIn = IsInLURD(Pos, Area);
    }
    else if (Area instanceof Array) {
        isIn = IsAtTileArray(Pos, Area);
    }
    return isIn;
}

function IsAtTile(Pos, Tile) {
    return (Pos.X == Tile.X && Pos.Y == Tile.Y)
}
function IsInLURD(Pos, LURD) {
    return (Pos.X >= LURD.leftUp.X && Pos.Y >= LURD.leftUp.Y && Pos.X <= LURD.rightDown.X && Pos.Y <= LURD.rightDown.Y)

}
function IsAtTileArray(Pos, Tiles) {
    for (var tile of Tiles) {
        if (IsAtTile(Pos, tile)) {
            return true;
        }
    }
    return false;
}
//

function RandomPosOfArea(Area) {
    if (Area.X != undefined) {
        return Object.assign({}, Area);
    }
    else if (Area.leftUp != undefined) {
        return {
            X: Math.floor(Math.random() * (Area.rightDown.X - Area.leftUp.X + 1)) + Area.leftUp.X,
            Y: Math.floor(Math.random() * (Area.rightDown.Y - Area.leftUp.Y + 1)) + Area.leftUp.Y,
        }
    }
    else if (Area instanceof Array) {
        return Object.assign({}, Area[Math.floor(Math.random() * Area.length)]);
    }
}
function MovePlayer(Pos, triggerPlayerMoved = false) {
    if (Pos.X == undefined || Pos.Y == undefined) return;
    Player.MapData.Pos = Object.assign({}, Pos);
    ServerSend("ChatRoomCharacterMapDataUpdate", { Pos: Object.assign({}, Pos) });
    if (triggerPlayerMoved) {
        if (PlayerMoved) {
            PlayerMoved();
        }
    }
    else {
        pverPos = Object.assign({}, Player.MapData.Pos);
    }
}
class DroneInfo {
    constructor() {
        this.scriptVersion = 1.5;
        this.MemberNumber = Player.MemberNumber;
        this.isDrone = false;
        this.isOwner = false;
        this.level = 0;
        this.type = "BasicDrone";

        this.battery = 1000;
        this.batteryMax = 1000;

        this.moveBatteryCost = 1;
        this.chatBatteryCost = 50;
        this.miniteBatteryCost = 10;
        this.punishBatteryCost = 100;
        this.orgasmBatteryGet = 100;

        this.shockLevel = 1;
        this.shoclCount = 3;

        this.coin = 0;
        this.ownerId = -1;

        //0无限制 1限制 2禁用
        this.bodyStatus = {
            eyes: 0,
            ears: 0,
            mouth: 0,
            body: 0,
            hands: 0,
            legs: 0,
        };
        this.bodyStatusMax = {
            eyes: 0,
            ears: 0,
            mouth: 0,
            body: 0,
            hands: 0,
            legs: 0,
        };
        this.bindStatus = {
            eyes: 0,
            ears: 0,
            mouth: 0,
            body: 0,
            hands: 0,
            legs: 0,
        };
        this.disPlayTalk = false;

        this.facilityMapEntered = false;

        this.items = [];
        this.itemsMax = 3;

        this.missions = [];
        this.missionsMax = 3;

        this.modifys = new Map()

        this.lastLoginDate = 0;
        this.todaysMission = 0;
        this.todaysWork = 0
        this.workMax = 30;

        this.sleepUntil = null;
    }
    FromPlayerSetting() {
        if (Player.ExtensionSettings["DTSbyZajucd"] != undefined) {
            return Player.ExtensionSettings["DTSbyZajucd"];
        }
        return new DroneInfo();
    }
    SaveToPlayerSetting() {
        Player.ExtensionSettings["DTSbyZajucd"] = this;
        ServerPlayerExtensionSettingsSync("DTSbyZajucd");
    }
}
class MissionInfo {
    constructor(name, text, reward) {
        this.name = name;
        this.text = text;
        this.desc = "";
        this.reward = reward;
        this.id = Date.now() + Math.floor(Math.random() * 10000);
        this.complete = null;
    }

    static ProgressAdd(name) {
        var pdi = PlayerDroneInfo();
        for (var mission of pdi.missions) {
            if (mission.name == name) {
                mission.progress += 1;
                if (mission.progress >= mission.target) {
                    MissionInfo.MissionComplete(mission);
                }
            }
        }
    }

    static MissionComplete(mission, ...parmas) {
        var pdi = PlayerDroneInfo();
        SendMessageToSelf(`任务:${mission.text} 完成，奖励${mission.reward}配额点数`)
        pdi.coin += mission.reward;
        if (mission.complete != null) {
            MissionInfo[mission.complete](mission, ...parmas)
        }
        pdi.missions = pdi.missions.filter(mi => mission.id != mi.id);

    }

    static StockRoomMission() {
        var from = Math.floor(Math.random() * 60)
        var to = Math.floor(Math.random() * 60)
        var mission = new MissionInfo("StockRoom", "运送货物", 10);
        mission.from = from;
        mission.to = to;
        mission.complete = "StockRoomMissionComplete"
        mission.desc = `将${String.fromCharCode(65 + Math.floor(from / 5))}${from % 5 + 1}的货物运送至${String.fromCharCode(65 + Math.floor(to / 5))}${to % 5 + 1}`
        return mission;
    }

    static StockRoomMissionComplete(mission) {
        var pdi = PlayerDroneInfo();
        pdi.items = pdi.items.filter(item => !(item.name == "StockRoom" && item.index == mission.from));
    }

    static OrgasmMission() {
        var mission = new MissionInfo("Orgasm", "高潮任务", 10);
        mission.target = 5;
        mission.progress = 0;
        mission.desc = `高潮五次`;
        return mission;
    }
    static OrgasmMission() {
        var mission = new MissionInfo("OrgasmResist", "忍耐高潮任务", 10);
        mission.target = 3;
        mission.progress = 0;
        mission.desc = `忍耐高潮三次`;
        return mission;
    }
    static SpankMission() {
        var mission = new MissionInfo("Spank", "被打屁股任务", 10);
        mission.target = 3;
        mission.progress = 0;
        mission.desc = `被管理员或游客打屁股三次`;
        return mission;
    }
    static OwnerSpankMission() {
        var mission = new MissionInfo("OwnerSpank", "打屁股任务", 10);
        mission.target = 3;
        mission.progress = 0;
        mission.desc = `打无人机的屁股三次`;
        return mission;
    }
    static PetHeadMission() {
        var mission = new MissionInfo("PetHead", "被摸头任务", 10);
        mission.target = 3;
        mission.progress = 0;
        mission.desc = `被管理员或游客摸头三次`;
        return mission;
    }
    static OwnerPetHeadMission() {
        var mission = new MissionInfo("OwnerPetHead", "摸头任务", 10);
        mission.target = 3;
        mission.progress = 0;
        mission.desc = `摸无人机的头三次`;
        return mission;
    }
    static ChargeMission() {
        var mission = new MissionInfo("Charge", "充电桩任务", 10);
        mission.target = 1;
        mission.progress = 0;
        mission.desc = `使用充电桩一次`;
        return mission;
    }
    static TrainMission() {

    }
    static Education() {

    }
}
class ItemInfo {
    constructor(name) {
        this.name = name;
        this.id = Date.now() + Math.floor(Math.random() * 10000);
        this.text = "";
        this.canUse = () => { return true }
        this.use = null;
        this.param = [];
    }
    static RemoveThis(item) {
        var pdi = PlayerDroneInfo();
        pdi.items = pdi.items.filter((i) => { return i.id != item.id })
    }
    static StockRoomItem(index) {
        var item = new ItemInfo("StockRoom");
        item.index = index;
        item.text = `货物${String.fromCharCode(65 + Math.floor(index / 5))}${index % 5 + 1}`

        return item;
    }
    static BatteryItem() {
        var item = new ItemInfo("BatteryItem");
        item.text = "一次性充电宝，补充无人机50%的电量，记得在电量耗尽前使用";
        item.use = "BatteryItemUse"
        return item;
    }
    static BatteryItemUse(item) {
        var pdi = PlayerDroneInfo();
        if (pdi.isDrone) {
            SendActionText(`无人机${pdi.MemberNumber}将充电宝的电源线接入下体的电源接口，开始充电`)
            SendMessageToSelf(`${styleProgressBar("正在充电", "充电完成", 15000, () => {
                var pdi = PlayerDroneInfo();
                ResponseBatteryCharge(pdi.batteryMax / 2);
                SendMessageToSelf("充电完成");
            })}`)
        }
        else {
            ResponseBatteryCharge(pdi.batteryMax / 2);
            SendMessageToSelf("个人信息终端无需充电，但已将充电宝内电量作为备用能源补充");
        }
        ItemInfo.RemoveThis(item);
    }
    static BindStatusDownItem() {
        var item = new ItemInfo("BindStatusDownItem");
        item.text = "拘束减缓芯片，将一个部位的拘束等级下调一级";
        item.param = [
            {
                id: 0,
                name: bodyPartDisplayStrings[0]
            },
            {
                id: 1,
                name: bodyPartDisplayStrings[1]
            },
            {
                id: 2,
                name: bodyPartDisplayStrings[2]
            },
            {
                id: 4,
                name: bodyPartDisplayStrings[4]
            },
            {
                id: 5,
                name: bodyPartDisplayStrings[5]
            },
        ]
        item.use = "BindStatusDownItemUse";
        return item;
    }

    static BindStatusDownItemUse(item, part) {
        var pdi = PlayerDroneInfo();
        if (pdi.isDrone) {
            SendActionText(`无人机${pdi.MemberNumber}用拘束减缓芯片在项圈上扫了一下，${bodyPartDisplayStrings[part]}的拘束松开了`)
            DoSetBodyOrBindStatus(
                0,
                part,
                pdi.bindStatus[bodyPartStrings[part]] == 0 ? 0 : pdi.bindStatus[bodyPartStrings[part]] - 1,
                { Name: "拘束减缓芯片" }
            );
        }
        else {
            SendActionText(`${Player.Name}用拘束减缓芯片在身上的拘束上扫了一下，${bodyPartDisplayStrings[part]}的拘束松开了`)
            RemoveRestrainsWithAssetGroup(Player, bodyPartAssetGroups[part])
        }
        ItemInfo.RemoveThis(item);
    }
    static BindStatusUpItem() {
        var item = new ItemInfo("BindStatusUpItem");
        item.text = "拘束收紧芯片，将一个部位的拘束等级上调一级";
        item.param = [
            {
                id: 0,
                name: bodyPartDisplayStrings[0]
            },
            {
                id: 1,
                name: bodyPartDisplayStrings[1]
            },
            {
                id: 2,
                name: bodyPartDisplayStrings[2]
            },
            {
                id: 4,
                name: bodyPartDisplayStrings[4]
            },
            {
                id: 5,
                name: bodyPartDisplayStrings[5]
            },
        ]
        item.use = "BindStatusUpItemUse";
        return item;
    }
    static BindStatusUpItemUse(item,part) {

        var pdi = PlayerDroneInfo();
        if (pdi.isDrone) {
            SendActionText(`无人机${pdi.MemberNumber}用拘束收紧芯片在项圈上扫了一下，${bodyPartDisplayStrings[part]}的拘束收紧了`)
            DoSetBodyOrBindStatus(
                0,
                part,
                pdi.bindStatus[bodyPartStrings[part]] == 2 ? 2 : pdi.bindStatus[bodyPartStrings[part]] + 1,
                { Name: "拘束收紧芯片" }
            );
        }
        else {
            pdi.coin += 5;
            SendActionText(`${Player.Name}使用了拘束收紧芯片，但无法对非无人机使用，所以被回收为了5配额点数`)
        }
        ItemInfo.RemoveThis(item);
    }
    static BodyStatusDownItem() {
        var item = new ItemInfo("BodyStatusDownItem");
        item.text = "机能恢复芯片，将一个部位的机能限制下调一级";
        item.param = [
            {
                id: 0,
                name: bodyPartDisplayStrings[0]
            },
            {
                id: 1,
                name: bodyPartDisplayStrings[1]
            },
            {
                id: 2,
                name: bodyPartDisplayStrings[2]
            },
            {
                id: 4,
                name: bodyPartDisplayStrings[4]
            },
            {
                id: 5,
                name: bodyPartDisplayStrings[5]
            },
        ]
        item.use = "BodyStatusDownItemUse";
        return item;
    }
    static BodyStatusDownItemUse(item, part) {
        var pdi = PlayerDroneInfo();
        if (pdi.isDrone) {
            var pdi = PlayerDroneInfo();
            SendActionText(`无人机${pdi.MemberNumber}用机能恢复芯片在项圈上扫了一下，${bodyPartDisplayStrings[part]}的机能恢复了`)
            DoSetBodyOrBindStatus(
                1,
                part,
                pdi.bodyStatus[bodyPartStrings[part]] == 0 ? 0 : pdi.bodyStatus[bodyPartStrings[part]] - 1,
                { Name: "机能恢复芯片" }
            );
        }
        else {
            SendActionText(`${Player.Name}用机能恢复芯片在身上的拘束上扫了一下，${bodyPartDisplayStrings[part]}的拘束松开了`)
            RemoveRestrainsWithAssetGroup(Player, bodyPartAssetGroups[part])
        }
        ItemInfo.RemoveThis(item);
    }
    static BodyStatusUpItem() {
        var item = new ItemInfo("BodyStatusUpItem");
        item.text = "机能限制芯片，将一个部位的机能限制提升一级";
        item.param = [
            {
                id: 0,
                name: bodyPartDisplayStrings[0]
            },
            {
                id: 1,
                name: bodyPartDisplayStrings[1]
            },
            {
                id: 2,
                name: bodyPartDisplayStrings[2]
            },
            {
                id: 4,
                name: bodyPartDisplayStrings[4]
            },
            {
                id: 5,
                name: bodyPartDisplayStrings[5]
            },
        ]
        item.use = "BodyStatusUpItemUse";
        return item;
    }
    static BodyStatusUpItemUse(item, part) {
        var pdi = PlayerDroneInfo();
        if (pdi.isDrone) {
            var pdi = PlayerDroneInfo();
            if (pdi.bodyStatus[bodyPartStrings[part]] == 2 ? 2 : pdi.bodyStatus[bodyPartStrings[part]] + 1 > pdi.bodyStatusMax[bodyPartStrings[part]]) {
                pdi.coin += 5;
                SendActionText(`无人机${pdi.MemberNumber}用机能限制芯片在项圈上扫了一下，但该部位未接受改造手术机能无法被限制，所以芯片被回收为了5配额点数`)
            }
            else {
                SendActionText(`无人机${pdi.MemberNumber}用机能限制芯片在项圈上扫了一下，${bodyPartDisplayStrings[part]}的机能被限制了`)
                DoSetBodyOrBindStatus(
                    1,
                    part,
                    pdi.bindStatus[bodyPartStrings[part]] == 2 ? 2 : pdi.bindStatus[bodyPartStrings[part]] + 1,
                    { Name: "机能限制芯片" }
                );
            }
        }
        else {
            pdi.coin += 5;
            SendActionText(`${Player.Name}使用了机能限制芯片，但无法对非无人机使用，所以被回收为了5配额点数`)
        }
        ItemInfo.RemoveThis(item);
    }
    static VibeItem() {
        var item = new ItemInfo("VibeItem");
        item.text = "震动控制器，可以调整震动玩具的强度";
        item.param = [
            {
                id: 0,
                name: "关"
            },
            {
                id: 1,
                name: "弱"
            },
            {
                id: 2,
                name: "强"
            },
        ]
        item.use = "VibeItemUse";
        return item;
    }
    static VibeItemUse(item, level) {
        var pdi = PlayerDroneInfo();
        if (pdi.isDrone) {
            var pdi = PlayerDroneInfo();
            SendActionText(`无人机${pdi.MemberNumber}使用了震动控制器`)
            DoSetBodyOrBindStatus(
                1,
                3,
                level,
                { Name: "震动控制器" }
            );
        }
        else {
            DoVibe(level * 2, true);
            SendActionText(`${Player.Name}使用了震动控制器`)
        }
        ItemInfo.RemoveThis(item);
    }
    static OrgasmLimitItem() {
        var item = new ItemInfo("OrgasmLimitItem");
        item.text = "高潮限制器，可以调整高潮限制的等级";
        item.param = [
            {
                id: 0,
                name: "关"
            },
            {
                id: 1,
                name: "寸止"
            },
            {
                id: 2,
                name: "禁止"
            },
        ]
        item.use = "OrgasmLimitItemUse";
        return item;
    }
    static OrgasmLimitItemUse(item, level) {
        var pdi = PlayerDroneInfo();
        if (pdi.isDrone) {
            var pdi = PlayerDroneInfo();
            SendActionText(`无人机${pdi.MemberNumber}使用了高潮限制器`)
            DoSetBodyOrBindStatus(
                1,
                3,
                level,
                { Name: "高潮限制器" }
            );
        }
        else {
            pdi.coin += 5;
            SendActionText(`${Player.Name}使用了高潮限制器，但无法对非无人机使用，所以被回收为了5配额点数`)
        }
        ItemInfo.RemoveThis(item);

    }
    static DisplayTalkItem() {
        var item = new ItemInfo("OrgasmLimitItem");
        item.text = "显示器开关，可以调整是否使用显示器发言";
        item.param = [
            {
                id: 0,
                name: "关"
            },
            {
                id: 1,
                name: "开"
            },
        ]
        item.use = "DisplayTalkItemUse";
        return item;
    }
    static DisplayTalkItemUse(item, level) {
        var pdi = PlayerDroneInfo();
        if (pdi.isDrone) {
            var pdi = PlayerDroneInfo();
            SendActionText(`无人机${pdi.MemberNumber}使用了显示器开关`)
            pdi.disPlayTalk = level == 1;
        }
        else {
            pdi.coin += 5;
            SendActionText(`${Player.Name}使用了显示器开关，但无法对非无人机使用，所以被回收为了5配额点数`)
        }
        ItemInfo.RemoveThis(item);
    }
    static PrivateRoomItem() {
        var item = new ItemInfo("PrivateRoomItem");
        item.text = "私人房间房卡，可以传送至私人房间内，可在房间内呼叫无人机侍寝（记得提前记住无人机的id）";
        item.param = [
            {
                id: 0,
                name: "一号房"
            },
            {
                id: 1,
                name: "二号房"
            },
            {
                id: 2,
                name: "三号房"
            },
        ]
        item.use = "PrivateRoomItemUse";
        return item;

    }
    static PrivateRoomItemUse(item, level) {
        var pdi = PlayerDroneInfo();
        if (pdi.isDrone) {
            SendMessageToSelf("无人机不允许使用该道具，执行惩罚并没收道具");
            DoPunishment(2, 3);
            ItemInfo.RemoveThis(item);
            return;
        }
        for (var charater of ChatRoomCharacter) {
            if (IsInArea(charater.MapData.Pos, PrivateRoom.Areas[level])){
                SendMessageToSelf("房间内有人，无法使用");
                return;
            }
        }
        MovePlayer(RandomPosOfArea(PrivateRoom.Areas[level]), true);
        ItemInfo.RemoveThis(item);
    }


}

var trainingProcess = 0;
class RequireActivityinfo {
    constructor(FocusGroupNames, ActivityNames, param, timeLimit, count, calltrainingProcess) {
        this.FocusGroupNames = FocusGroupNames;
        this.ActivityNames = ActivityNames;
        this.param = param;
        this.timeLimitUnitl = Date.now() + timeLimit;
        this.target = count;
        this.progress = 0;
        this.completed = false;
        this.calltrainingProcess = calltrainingProcess;
    }
    static RequireActivity = [];
    static CheckAllActivityComplete(SourceCharacter, TargetCharacter, param, FocusGroupName, ActivityName) {
        for (var info of RequireActivityinfo.RequireActivity) {
            if (info.complete == true) continue;
            if (param != info.param) continue;
            if (info.FocusGroupNames.length > 0 && info.FocusGroupNames.findIndex((i) => { return i == FocusGroupName }) == -1) continue;
            if (info.ActivityNames.length > 0 && info.ActivityNames.findIndex((i) => { return i == ActivityName }) == -1) continue;
            info.progress++;
            if (info.progress >= info.target) {
                info.completed = true;
                if (info.calltrainingProcess) {
                    trainingProcess += 1;
                    info.calltrainingProcess = false;
                }
            }
        }
        RequireActivityinfo.ClearAllPoseCompleted();
    }
    static CheckAllActivityIncomplete() {
        for (var info of RequireActivityinfo.RequireActivity) {
            if (Date.now() > info.timeLimitUnitl && info.progress < info.target) {
                SendMessageToSelf("未在指定时间内完成动作，执行惩罚");
                DoPunishment(2, 3);
                info.completed = true;
            }
        }
        RequireActivityinfo.ClearAllPoseCompleted();
    }
    static ClearAllPoseCompleted() {
        RequireActivityinfo.RequireActivity = RequireActivityinfo.RequireActivity.filter((i) => { return (i.completed == false) })
    }

    static RequireDroneActivity(FocusGroupNameArray, ActivityNameArray, param, timeLimit, count, calltrainingProcess = false) {
        RequireActivityinfo.RequireActivity.push(new RequireActivityinfo(FocusGroupNameArray, ActivityNameArray, param, timeLimit, count, calltrainingProcess));
    }

}
class RequirePoseinfo {
    constructor(poseNameArray,timeLimit, calltrainingProcess) {
        this.poseNameArray = poseNameArray;
        this.timeLimitUnitl = Date.now() + timeLimit;
        this.completed = false;
        this.calltrainingProcess = calltrainingProcess;
    }
    static RequirePose = [];
    static RequireDronePose(poseNameArray, timeLimit, calltrainingProcess = false) {
        RequirePoseinfo.RequirePose.push(new RequirePoseinfo(poseNameArray, timeLimit, calltrainingProcess))
    }

    static CheckPose() {
        for (var reqPose of RequirePoseinfo.RequirePose) {
            if (reqPose.complete == true) continue;
            var isPose = false;
            for (var pose of reqPose.poseNameArray) {
                if (Player.Pose.findIndex((i) => { return i == pose }) != -1) {
                    isPose = true;
                    break;
                }
            }
            if (isPose) {
                reqPose.completed = true;
                if (reqPose.calltrainingProcess) {
                    trainingProcess += 1;
                }
            }
            else if (Date.now() > reqPose.timeLimitUnitl) {
                SendMessageToSelf("未在指定时间内完成动作，执行惩罚");
                DoPunishment(2, 3);
                reqPose.completed = true;
            }
        }
        RequirePoseinfo.ClearAllPoseCompleted();
    }
    static ClearAllPoseCompleted() {
        RequirePoseinfo.RequirePose = RequirePoseinfo.RequirePose.filter((i) => { return (i.completed == false) })
    }

}
var _PlayerDroneInfo = null;
function PlayerDroneInfo() {
    if (!Player.ExtensionSettings["DTSbyZajucd"]) {
        Player.ExtensionSettings["DTSbyZajucd"] = new DroneInfo();
        _PlayerDroneInfo = Player.ExtensionSettings["DTSbyZajucd"];
        ServerPlayerExtensionSettingsSync("DTSbyZajucd");
    }
    else if (Player.ExtensionSettings["DTSbyZajucd"].scriptVersion < new DroneInfo().scriptVersion) {
        addMissingProperties(Player.ExtensionSettings["DTSbyZajucd"], new DroneInfo());
        showChangeLog = true;
        Player.ExtensionSettings["DTSbyZajucd"].scriptVersion = new DroneInfo().scriptVersion;
        _PlayerDroneInfo = Player.ExtensionSettings["DTSbyZajucd"];
        ServerPlayerExtensionSettingsSync("DTSbyZajucd");
    }
    return Player.ExtensionSettings["DTSbyZajucd"];

}

function addMissingProperties(target, source) {
    for (let key in source) {
        if (source.hasOwnProperty(key) && !target.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
    return target;
}

function RefershPlayerEffect(sender = Player) {

    CharacterLoadEffect(sender);
    ChatRoomCharacterUpdate(sender);
}


function SendMessageToSelf(message, tag = "", cantClear = false, clearAtNext = false) {
    ChatRoomSendLocal(styleMessage(DTSLocalizeMessage(message), tag, cantClear, clearAtNext));
}
function SendActionText(message, target = null) {
    if (target) {
        ServerSend("ChatRoomChat", {
            Content: "DTS_ACTION_TAG", Type: "Action",
            Dictionary: [
                {
                    Tag: "MISSING TEXT IN \"Interface.csv\": DTS_ACTION_TAG",
                    Text: message
                }
            ],
            Target: target.MemberNumber
        });
    }
    else {
        ServerSend("ChatRoomChat", {
            Content: "DTS_ACTION_TAG", Type: "Action",
            Dictionary: [
                {
                    Tag: "MISSING TEXT IN \"Interface.csv\": DTS_ACTION_TAG",
                    Text: message
                }
            ]
        });
    }
}
var clearLastTag = ["status","items","actions","missions"]
function styleMessage(message, tag = "", cantClear = false, clearAtNext = false) {
    var timestamp = new Date().getTime(); // 函数调用时的时间
    if (cantClear) timestamp = false
    const hiddenString = "styleMessage";
    ClearLastMessage();
    if (clearLastTag.findIndex((t) => { return t == tag }) > -1) {
        ClearTagMessage(tag);
    }

    return `<div
    data-timestamp="${timestamp}"
    data-style-message="${hiddenString}"
    data-clearatnext="${clearAtNext}"
    data-cleartag="${tag}"
    style='
  background: #000000;
  padding: 8px;
  border: 1px solid #3C3C3C;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.5);
  font-family: Consolas, "Courier New", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-radius: 2px;
  color: #00FF00;
  display: flex;
  align-items: baseline;
  gap: 0.4em;
  line-height: 1.5;
'><span style="font-size: 1.2vw;">■</span><span style="
  font-size: 1.6vw;
  white-space: pre-wrap;
  flex: 1;
  line-height: inherit;
  margin: 0;
">${message}_</span></div>`;
}

// 全局回调注册表
const _buttonCallbacks = new Map();
let _globalListenerAttached = false;
/**
 * 生成可嵌入终端文本的内联按钮（无尺寸样式版本）
 * @param {string} buttonText - 按钮显示的文本
 * @param {Function|string} clickHandler - 点击时执行的函数或代码字符串
 * @returns {string} 内联按钮的 HTML 字符串
 */
function styleButton(buttonText, clickHandler, ...extraArgs) {
    buttonText = DTSLocalizeText(buttonText);
    // 防止 XSS 攻击（仍保留原有转义逻辑，用于文本内容）
    const escapeHtml = (text) => {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    };
    const safeText = escapeHtml(buttonText);

    // 生成唯一标识符（简单自增，也可使用 uuid）
    const clickId = 'btn_' + Date.now() + '_' + Math.random().toString(36).substr(2, 8);

    // 存储回调及额外参数
    if (typeof clickHandler === 'function') {
        _buttonCallbacks.set(clickId, { handler: clickHandler, args: extraArgs });
    } else if (clickHandler !== undefined) {
        console.warn('styleButton: clickHandler 必须是函数，已忽略点击绑定');
    }

    // 全局只绑定一次事件委托
    if (!_globalListenerAttached) {
        document.addEventListener('click', (event) => {
            // 查找被点击的元素或其父级中带有 data-click-id 的按钮
            const targetButton = event.target.closest('[data-click-id]');
            if (targetButton) {
                const id = targetButton.getAttribute('data-click-id');
                const callbackInfo = _buttonCallbacks.get(id);
                if (callbackInfo) {
                    const { handler, args } = callbackInfo;
                    // 调用回调，this 指向按钮，传递 event 和额外参数
                    handler.call(targetButton, ...args);
                }
            }
        });
        _globalListenerAttached = true;
    }

    // 核心样式（与原样式完全一致，无任何尺寸相关属性）
    return `<button
        data-click-id="${clickId}"
        style="
            display: inline-flex;
            align-items: baseline;
            cursor: pointer;
            background: transparent;
            border: solid;
            border-color: #33CC33;
            border-width: 1px;
            color: #00FF00;
            transition: all 0.1s ease;
            white-space: nowrap;
            font-family: inherit;
        "
        onmouseover="this.style.background='rgba(0, 255, 0, 0.1)'; this.style.borderColor='#00FF00';"
        onmouseout="this.style.background='transparent'; this.style.borderColor='#33CC33';"
        onmousedown="this.style.background='rgba(0, 255, 0, 0.2)';"
        onmouseup="this.style.background='rgba(0, 255, 0, 0.1)'; this.style.borderColor='#00FF00';"
    >
        <span>▸</span>${safeText}
    </button>`;
}


// ==================== 全局文本进度条管理器（支持回调参数） ====================
const _textProgressManager = {
    items: new Map(),
    intervalMs: 30,

    register(id, duration, onComplete, onCompleteParams, textSpan, messageSpan, container, completionMessage) {
        const startTime = performance.now();
        const intervalId = setInterval(() => {
            if (!container.isConnected) {
                this.unregister(id);
                return;
            }
            const elapsed = performance.now() - startTime;
            let progress = Math.min(1, elapsed / duration);
            this.updateText(textSpan, progress);
            if (progress >= 1) {
                // 进度满，如果有完成消息则替换左侧消息
                if (completionMessage && messageSpan) {
                    const escapeHtml = (text) => {
                        const div = document.createElement('div');
                        div.textContent = text;
                        return div.innerHTML;
                    };
                    messageSpan.innerHTML = escapeHtml(completionMessage);
                }
                // 调用回调并传递额外参数
                if (typeof onComplete === 'function') {
                    onComplete(...onCompleteParams);
                }
                this.unregister(id);
            }
        }, this.intervalMs);
        this.items.set(id, { intervalId, onComplete, textSpan, container });
    },

    updateText(spanElement, progress) {
        const barWidth = 20;
        const filled = Math.floor(progress * barWidth);
        const empty = barWidth - filled;
        const bar = '#'.repeat(filled) + '_'.repeat(empty);
        const percent = Math.floor(progress * 100);
        spanElement.textContent = `[${bar}] ${percent}%`;
    },

    unregister(id) {
        const item = this.items.get(id);
        if (item) {
            clearInterval(item.intervalId);
            this.items.delete(id);
        }
    },

    clearAll() {
        for (const [id, item] of this.items) {
            clearInterval(item.intervalId);
        }
        this.items.clear();
    }
};

window.addEventListener('beforeunload', () => _textProgressManager.clearAll());

/**
 * 生成控制台风格的字符串进度条
 * @param {string} message               左侧显示的消息（加载中文本）
 * @param {string|null} completionMessage 进度满后将左侧消息替换为此文本（传 null 或不替换）
 * @param {number} duration              总时长（毫秒），默认 3000
 * @param {Function} onComplete          进度满时执行的回调函数（可选）
 * @param {...any} onCompleteParams      回调函数的额外参数
 * @returns {string}                     可插入 DOM 的 HTML 字符串
 */
function styleProgressBar(message, completionMessage, duration = 3000, onComplete = null, ...onCompleteParams) {
    message = DTSLocalizeText(message);
    completionMessage = completionMessage == null ? completionMessage : DTSLocalizeText(completionMessage);
    const progressId = 'txtpb_' + Date.now() + '_' + Math.random().toString(36).substr(2, 8);

    const escapeHtml = (text) => {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    };
    const safeMessage = escapeHtml(message);
    const safeCompletionMessage = completionMessage ? escapeHtml(completionMessage) : null;

    // 样式完全与提供的 html 同步，只在消息 span 增加一个类名以便后续更新内容
    const html = `<div data-text-progress-id="${progressId}" style="
            background: #000000;
            padding: 8px;
            border: 1px solid #3C3C3C;
            box-shadow: inset 0 1px 3px rgba(0,0,0,0.5);
            font-family: Consolas, 'Courier New', monospace;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            border-radius: 2px;
            color: #00FF00;
            display: inline-flex;
            align-items: baseline;
            gap: 0.8em;
            line-height: 1.5;
        ">
            <span class="text-progress-message-${progressId}" style="font-size: 1.6vw; white-space: pre-wrap; flex-shrink: 0;">${safeMessage}</span>
            <span class="text-progress-${progressId}" style="
                font-family: inherit;
                font-size: 1.6vw;
                letter-spacing: 1px;
                white-space: pre;
            ">[${'#'.repeat(20)}] 0%</span>
        </div>`;

    setTimeout(() => {
        const container = document.querySelector(`[data-text-progress-id="${progressId}"]`);
        if (!container) return;
        const textSpan = container.querySelector(`.text-progress-${progressId}`);
        const messageSpan = container.querySelector(`.text-progress-message-${progressId}`);
        if (textSpan && messageSpan) {
            _textProgressManager.register(
                progressId, duration, onComplete, onCompleteParams,
                textSpan, messageSpan, container, safeCompletionMessage
            );
        }
    }, 0);

    return html;
}
async function WaitEnable() {
    if (!window.DTSbyZajucd) {
        console.log(`加载完成`);
        window.DTSbyZajucd = true;
        await waitFor(() => typeof window.Player?.MemberNumber === "number");
        Init();
    }

}
async function waitFor(func, cancelFunc = () => false) {
    while (!func()) {
        if (cancelFunc()) {
            return false;
        }
        // eslint-disable-next-line no-await-in-loop
        await sleep(10);
    }
    return true;
}
WaitEnable();
// ---- Begin pinned facility extension ----
// Bridge for userscript managers that wrap @grant none scripts: the original remote page scripts exposed these callbacks on window.
(function DTSExposeFacilityCallbacks() {
    const callbacks = {
        PlayerMoved: typeof PlayerMoved === "function" ? PlayerMoved : undefined,
        DoPer10Sec: typeof DoPer10Sec === "function" ? DoPer10Sec : undefined,
        ChargeComplete: typeof ChargeComplete === "function" ? ChargeComplete : undefined,
        StockRoomEnter: typeof StockRoomEnter === "function" ? StockRoomEnter : undefined,
        StockRoomLeave: typeof StockRoomLeave === "function" ? StockRoomLeave : undefined,
        ElevatorEnter: typeof ElevatorEnter === "function" ? ElevatorEnter : undefined,
        ElevatorLeave: typeof ElevatorLeave === "function" ? ElevatorLeave : undefined,
        SleepEnterZoneEnter: typeof SleepEnterZoneEnter === "function" ? SleepEnterZoneEnter : undefined,
        SleepEnterZoneLeave: typeof SleepEnterZoneLeave === "function" ? SleepEnterZoneLeave : undefined,
        ModifyRoomEnter: typeof ModifyRoomEnter === "function" ? ModifyRoomEnter : undefined,
        ModifyRoomLeave: typeof ModifyRoomLeave === "function" ? ModifyRoomLeave : undefined,
        ModifyTileEnter: typeof ModifyTileEnter === "function" ? ModifyTileEnter : undefined,
        ShopRoomEnter: typeof ShopRoomEnter === "function" ? ShopRoomEnter : undefined,
        ShopRoomLeave: typeof ShopRoomLeave === "function" ? ShopRoomLeave : undefined,
        ShopInnerRoomEnter: typeof ShopInnerRoomEnter === "function" ? ShopInnerRoomEnter : undefined,
        ShopInnerRoomLeave: typeof ShopInnerRoomLeave === "function" ? ShopInnerRoomLeave : undefined,
        WorkRoomEnter: typeof WorkRoomEnter === "function" ? WorkRoomEnter : undefined,
        WorkRoomLeave: typeof WorkRoomLeave === "function" ? WorkRoomLeave : undefined,
        WorkInnerRoomEnter: typeof WorkInnerRoomEnter === "function" ? WorkInnerRoomEnter : undefined,
        OperRoomEnter: typeof OperRoomEnter === "function" ? OperRoomEnter : undefined,
        OperRoomLeave: typeof OperRoomLeave === "function" ? OperRoomLeave : undefined,
        CatEnter: typeof CatEnter === "function" ? CatEnter : undefined,
        PrivateRoomEnter: typeof PrivateRoomEnter === "function" ? PrivateRoomEnter : undefined,
        TrainingRoomEnter: typeof TrainingRoomEnter === "function" ? TrainingRoomEnter : undefined,
        TrainingRoomLeave: typeof TrainingRoomLeave === "function" ? TrainingRoomLeave : undefined,
        EducationRoomEnter: typeof EducationRoomEnter === "function" ? EducationRoomEnter : undefined,
        EducationRoomLeave: typeof EducationRoomLeave === "function" ? EducationRoomLeave : undefined,
        ChargeRoomEnter: typeof ChargeRoomEnter === "function" ? ChargeRoomEnter : undefined,
        ChargeRoomLeave: typeof ChargeRoomLeave === "function" ? ChargeRoomLeave : undefined
    };
    for (const [name, fn] of Object.entries(callbacks)) {
        if (typeof fn === "function") {
            window[name] = fn;
            globalThis[name] = fn;
        }
    }
})();
//DTS训练设施扩展
//区域：入口（南），建设区（西） 货物搬运（地图四角），服从训练（东北），催眠训练（东南），机体改造（北西），物品出售（北东），操作员休息室（中南），无人机休眠室（中北）

const StockRoom = {
    Areas: [
        { leftUp: { X: 0, Y: 2 }, rightDown: { X: 4, Y: 6 } },
        { leftUp: { X: 35, Y: 2 }, rightDown: { X: 39, Y: 6 } },
        { leftUp: { X: 0, Y: 27 }, rightDown: { X: 4, Y: 31 } },
        { leftUp: { X: 35, Y: 27 }, rightDown: { X: 39, Y: 31 } },
    ],
    Exclude: [
    ],
    Enter: window["StockRoomEnter"],
    Leave: window["StockRoomLeave"]
}

function StockRoomEnter() {
    SendMessageToSelf(`已进入仓库区，可在柜子处${styleButton("拿起", StockRoomAction, true)}或${styleButton("放下", StockRoomAction, false)}货物`, "StockRoom")

}
function StockRoomLeave() {
    ClearTagMessage("StockRoom");
}

function StockRoomAction(isTake, isSkipCanInteract = false) {
    var pdi = PlayerDroneInfo();
    if (!IsInZone(Player.MapData.Pos, StockRoom)) {
        SendMessageToSelf(`不位于仓库区`, "StockRoom");
        return;
    }
    if (Player.CanInteract() == false && !isSkipCanInteract) {
        if (Player.IsMounted()) {
            SendMessageToSelf(`手臂与腿脚同时不可用，尝试呼叫调度系统代替操作${styleProgressBar("呼叫中", "已完成", 30000, StockRoomAction, isTake, true)}`, "StockRoom")
        }
        else {
            SendMessageToSelf(`手臂不可用，尝试调整姿态通过腿脚进行操作${styleProgressBar("调整中", "已完成", 10000, StockRoomAction, isTake, true)}`, "StockRoom")
        }
        return;
    }
    if (isTake) {
        if (pdi.items.length < pdi.itemsMax) {
            var index = GetStockIndex();
            pdi.items.push(ItemInfo.StockRoomItem(index));
            SendMessageToSelf(`拿取成功，货物编号${String.fromCharCode(65 + Math.floor(index / 5))}${index % 5 + 1}`, "StockRoom");
        }
        else {
            SendMessageToSelf(`储存单元已满，拿取失败`, "StockRoom")
        }
    }
    else {
        var success = false;
        var here = GetStockIndex();
        for (var i = pdi.missions.length - 1; i >= 0; i--)
        {
            var mission = pdi.missions[i];
            if (mission.name == "StockRoom") {
                for (var j = pdi.items.length - 1; j >= 0; j--) {
                    var item = pdi.items[j];
                    if (item.name == "StockRoom") {
                        if (item.index == mission.from && here == mission.to)
                            success = true;
                    }
                    if (success) {
                        SendMessageToSelf(`放置成功`, "StockRoom");
                        MissionInfo.MissionComplete(mission);
                        break;
                    }
                }
            }
            if (success) {
                break;
            }
        }
        if (!success) {
            SendMessageToSelf(`未携带应放置至此的货物`, "StockRoom");
        }
    }
}
function GetStockIndex() {
    var i;
    for (i = 0; i < StockRoom.Areas.length; i++) {
        if (IsInArea(Player.MapData.Pos, StockRoom.Areas[i])) break;
    }
    var xdiff = Player.MapData.Pos.X - StockRoom.Areas[i].leftUp.X;
    var ydiff = Player.MapData.Pos.Y - StockRoom.Areas[i].leftUp.Y;
    var index = i * 15 + Math.floor(ydiff / 2) * 5 + xdiff;
    if (index < 0) index = 0;
    if (index >= 60) index = 59;
    return index;
}

const Elevator = {
    Areas: [
        { leftUp: { X: 18, Y: 35 }, rightDown: { X: 20, Y: 37 } },
        { leftUp: { X: 30, Y: 35 }, rightDown: { X: 32, Y: 37 } },
        { leftUp: { X: 22, Y: 35 }, rightDown: { X: 24, Y: 37 } },
        { leftUp: { X: 30, Y: 30 }, rightDown: { X: 32, Y: 32 } },
    ],
    Exclude: [
    ],
    Enter: window["ElevatorEnter"],
    Leave: window["ElevatorLeave"]
}

async function ElevatorEnter(nowInZone) {
    var pdi = PlayerDroneInfo();
    switch (nowInZone) {
        case "0": {
            if (pdi.isDrone) {
                SendMessageToSelf("无人机进入设施电梯，即将转移至待命区", "Elevator");
                await sleep(3000);
                var xAdd4 = Object.assign({}, Player.MapData.Pos);
                xAdd4.X += 4;
                if (IsInArea(xAdd4, Elevator.Areas[2]) == false) {
                    xAdd4 = Object.assign({}, Elevator.Areas[2].leftUp)
                }
                MovePlayer(xAdd4);
                await sleep(3000);
                WearEquips(Player, [Crate]);
                SendMessageToSelf("收容仓部署完毕", "Elevator");
                await sleep(3000);
                MovePlayer(RandomPosOfArea(SleepRoom.Areas[0]));
                SendMessageToSelf("已移动至待命区，开始等待系统呼叫", "Elevator");
                SendMessageToSelf(styleProgressBar("等待中", "已呼叫", 30000, async () => {
                    SendMessageToSelf("收到系统呼叫，即将移动至设施主要区域", "Elevator");
                    await sleep(1000);
                    MovePlayer(RandomPosOfArea(Elevator.Areas[3]));
                    RemoveRestrainByOneAssetGroup(Player, Crate.AssetGroup);
                }));
            }
            else if (pdi.isOwner) {
                SendMessageToSelf("操作员进入设施电梯，即将转移至设施主要区域", "Elevator");
                var xAdd12 = Object.assign({}, Player.MapData.Pos);
                xAdd12.X += 12;
                if (IsInArea(xAdd12, Elevator.Areas[1]) == false) {
                    xAdd12 = Object.assign({}, Elevator.Areas[1].leftUp)
                }
                MovePlayer(xAdd12);
                RemoveRestrains
                RemoveRestrainByOneAssetGroup(Player, Crate.AssetGroup);
                RefreshBinds
            }
            else {
                SendMessageToSelf("游客不具备进入设施权限，请注册为无人机或操作员后再尝试进入", "Elevator");
            }
        }
            break;
        case "1": {
            if (pdi.isOwner) {
                SendMessageToSelf("操作员进入设施电梯，即将转移至设施入口", "Elevator");
                var xAdd12 = Object.assign({}, Player.MapData.Pos);
                xAdd12.X -= 12;
                if (IsInArea(xAdd12, Elevator.Areas[0]) == false) {
                    xAdd12 = Object.assign({}, Elevator.Areas[0].leftUp)
                }
                MovePlayer(xAdd12);
            }
            else if (pdi.isDrone) {
                SendMessageToSelf("无人机无权使用操作员电梯，执行惩罚", "Elevator");
                DoPunishment(2, 3);
            }
            else {
                SendMessageToSelf("游客不具备进入设施权限，请注册为无人机或操作员后再尝试进入", "Elevator");
            }
        }
            break;
        case "3": {
            if (pdi.isDrone) {
                SendMessageToSelf("无人机进入设施电梯，即将转移至待命区", "Elevator");
                await sleep(3000);
                var xAdd4 = Object.assign({}, Player.MapData.Pos);
                xAdd4.X += 3;
                if (IsInArea(xAdd4, Elevator.Areas[2]) == false) {
                    xAdd4 = Object.assign({}, Elevator.Areas[2].leftUp)
                }
                MovePlayer(xAdd4);
                await sleep(3000);
                WearEquips(Player, [Crate]);
                SendMessageToSelf("收容仓部署完毕", "Elevator");
                await sleep(3000);
                MovePlayer(RandomPosOfArea(SleepRoom.Areas[0]));
                SendMessageToSelf("已移动至待命区，开始等待系统呼叫", "Elevator");
                SendMessageToSelf(styleProgressBar("等待中", "已呼叫", 30000, async () => {
                    SendMessageToSelf("收到系统呼叫，即将移动至设施设施入口", "Elevator");
                    await sleep(1000);
                    MovePlayer(RandomPosOfArea(Elevator.Areas[0]));
                    RemoveRestrainByOneAssetGroup(Player, Crate.AssetGroup);
                }));
            }
            else if (pdi.isOwner) {
                SendMessageToSelf("操作员请使用南方操作员专用电梯", "Elevator");
            }
            else {
                SendMessageToSelf("游客不具备进入设施权限，请注册为无人机或操作员后再尝试进入", "Elevator");
            }
        }
            break;
    }

}

function ElevatorLeave() {
    ClearTagMessage("Elevator");
}

const SleepEnterZone = {
    Areas: [
        { leftUp: { X: 24, Y: 18 }, rightDown: { X: 27, Y: 25 } },
    ],
    Exclude: [
    ],
    Enter: window["SleepEnterZoneEnter"],
    Leave: window["SleepEnterZoneLeave"]
}

const SleepEnterTiles = {
    Areas: [
        { X: 27, Y: 18 },
        { X: 27, Y: 20 },
        { X: 27, Y: 22 },
        { X: 27, Y: 24 },
    ],
    Exclude: [
    ],
}

function SleepEnterZoneEnter() {
    SendMessageToSelf(`已进入无人机休眠区，可内侧软垫处${styleButton("休眠", SleepEnterZoneDoSleep, true)}以获取配额点数`, "SleepEnterZone")

}

function SleepEnterZoneLeave() {
    ClearTagMessage("SleepEnterZone");
}

function SleepEnterZoneDoSleep() {
    var i = IsInZone(Player.MapData.Pos, SleepEnterTiles);
    if (i === false) {
        SendMessageToSelf("不位于软垫上", "SleepEnterZone");
        return;
    }
    var index = Number.parseInt(i);
    SendMessageToSelf(`即将开始休眠${(index + 1) * 6}个小时，下线后依旧计算时间，${styleButton("开始休眠", async (index) => {
        ClearTagMessage("SleepEnterZone");
        SendMessageToSelf(`休眠开始，获得${(index + 1) * 10}配额点数`);
        var pdi = PlayerDroneInfo();
        pdi.coin += (index + 1) * 10;
        await sleep(1000);
        WearEquips(Player, [Crate]);
        SendMessageToSelf(`休眠仓部署完成，即将转移至待命区开始休眠`);
        await sleep(2000);
        MovePlayer(RandomPosOfArea(SleepRoom.Areas[0]), true);
        pdi.sleepUntil = Date.now() + (index + 1) * 6 * 3600 * 1000;
        ServerPlayerExtensionSettingsSync("DTSbyZajucd");

    }, index)}`, "SleepEnterZone");

}

const SleepRoom = {
    Areas: [
        { leftUp: { X: 34, Y: 34 }, rightDown: { X: 39, Y: 39 } },
    ],
    Exclude: [
    ],
}

const ModifyRoom = {
    Areas: [
        { leftUp: { X: 15, Y: 2 }, rightDown: { X: 18, Y: 7 } },
    ],
    Exclude: [
    ],
    Enter: window["ModifyRoomEnter"],
    Leave: window["ModifyRoomLeave"]
}
const ModifyInnerRoom = {
    Areas: [
        { leftUp: { X: 8, Y: 2 }, rightDown: { X: 14, Y: 7 } },
    ],
    Exclude: [
    ],
}

function ModifyRoomEnter() {
    SendMessageToSelf(`已进入改造工坊，${styleButton("显示可用改造", ShowAvailableModify)}`,"ModifyRoom")
}
function ModifyRoomLeave() {
    if (IsInZone(Player.MapData.Pos, ModifyInnerRoom) == false) {
        ClearTagMessage("ModifyRoom")
    }
}

var allModify = {
    eyes1:{
        id: "eyes1",
        name: "植入隐形眼镜显示器",
        desc: "眼部机能可被设为限制",
        price: 10,
        //check: (pdi) => { return (pdi.bodyStatusMax.eyes != undefined && pdi.bodyStatusMax.eyes == 0) },
        effect: (pdi) => { pdi.bodyStatusMax.eyes = 1; },
        front:[]
    },
    ears1:{
        id: "ears1",
        name: "植入耳道填充物",
        desc: "耳部机能可被设为限制",
        price: 10,
        //check: (pdi) => { return (pdi.bodyStatusMax.ears != undefined && pdi.bodyStatusMax.ears == 0) },
        effect: (pdi) => { pdi.bodyStatusMax.ears = 1; },
        front: []
    },
    mouth1:{
        id: "mouth1",
        name: "植入颌骨控制电机",
        desc: "口腔机能可被设为限制",
        price: 10,
        //check: (pdi) => { return (pdi.bodyStatusMax.mouth != undefined && pdi.bodyStatusMax.mouth == 0) },
        effect: (pdi) => { pdi.bodyStatusMax.mouth = 1; },
        front: []
    },
    hands1:{
        id: "hands1",
        name: "植入肩肘控制电机",
        desc: "手臂机能可被设为限制",
        price: 10,
        //check: (pdi) => { return (pdi.bodyStatusMax.hands != undefined && pdi.bodyStatusMax.hands == 0) },
        effect: (pdi) => { pdi.bodyStatusMax.hands = 1; },
        front: []
    },
    legs1:{
        id: "legs1",
        name: "植入膝踝控制电机",
        desc: "腿脚机能可被设为限制",
        price: 10,
        //check: (pdi) => { return (pdi.bodyStatusMax.legs != undefined && pdi.bodyStatusMax.legs == 0) },
        effect: (pdi) => { pdi.bodyStatusMax.legs = 1; },
        front: []
    },
    level1:{
        id: "level1",
        name: "系统升级至1.0版本",
        desc: "刷入下一版本系统固件，解锁更多功能",
        price: 15,
        //check: (pdi) => { return (pdi.level == 0 && GetMinBodyStatusMax(pdi) >=1)},
        effect: (pdi) => { pdi.level = 1; },
        front: ["eyes1", "ears1", "mouth1", "hands1", "legs1", "education1","training1"]
    },



    eyes2:{
        id: "eyes2",
        name: "更换人工电子眼球",
        desc: "眼部机能可被设为离线",
        price: 20,
        //check: (pdi) => { return (pdi.level >= 1 && pdi.bodyStatusMax.eyes != undefined && pdi.bodyStatusMax.eyes == 1) },
        effect: (pdi) => { pdi.bodyStatusMax.eyes = 2; },
        front: ["level1"]
    },
    ears2:{
        id: "ears2",
        name: "植入耳蜗减震器",
        desc: "耳部机能可被设为离线",
        price: 20,
        //check: (pdi) => { return (pdi.level >= 1 && pdi.bodyStatusMax.ears != undefined && pdi.bodyStatusMax.ears == 1) },
        effect: (pdi) => { pdi.bodyStatusMax.ears = 2; },
        front: ["level1"]
    },
    mouth2:{
        id: "mouth2",
        name: "植入声带控制装置",
        desc: "口腔机能可被设为离线",
        price: 20,
        //check: (pdi) => { return (pdi.level >= 1 && pdi.bodyStatusMax.mouth != undefined && pdi.bodyStatusMax.mouth == 1) },
        effect: (pdi) => { pdi.bodyStatusMax.mouth = 2; },
        front: ["level1"]
    },
    hands2:{
        id: "hands2",
        name: "植入手部控制电机",
        desc: "手臂机能可被设为离线",
        price: 20,
        //check: (pdi) => { return (pdi.level >= 1 && pdi.bodyStatusMax.hands != undefined && pdi.bodyStatusMax.hands == 1) },
        effect: (pdi) => { pdi.bodyStatusMax.hands = 2; },
        front: ["level1"]
    },
    legs2:{
        id: "legs2",
        name: "植入胯部控制电机",
        desc: "腿脚机能可被设为离线",
        price: 20,
        //check: (pdi) => { return (pdi.level >= 1 && pdi.bodyStatusMax.legs != undefined && pdi.bodyStatusMax.legs == 1) },
        effect: (pdi) => { pdi.bodyStatusMax.legs = 2; },
        front: ["level1"]
    },
    level2:{
        id: "level2",
        name: "系统升级至2.0版本",
        desc: "刷入下一版本系统固件，解锁更多功能",
        price: 25,
        //check: (pdi) => { return (pdi.level == 1 && GetMinBodyStatusMax(pdi) >= 2) },
        effect: (pdi) => { pdi.level = 2; },
        front: ["eyes2", "ears2", "mouth2", "hands2", "legs2", "education2", "training2"]
    },

    battery1:{
        id: "battery1",
        name: "加装膀胱内额外电源",
        desc: "增加50%的续航时间",
        price: 20,
        //check: (pdi) => { return (pdi.batteryMax == 1000) },
        effect: (pdi) => { pdi.batteryMax = 1500; },
        front: []
    },
    battery2:{
        id: "battery2",
        name: "加装肠道内额外电源",
        desc: "增加66%的续航时间",
        price: 30,
        //check: (pdi) => { return (pdi.level >= 1 && pdi.batteryMax == 1500) },
        effect: (pdi) => { pdi.batteryMax = 2500; },
        front: ["level1","battery1"]
    },

    itemsMax1:{
        id: "itemsMax1",
        name: "储存单元扩张",
        desc: "增加一个道具栏上限",
        price: 20,
        //check: (pdi) => { return (pdi.itemsMax == 3) },
        effect: (pdi) => { pdi.itemsMax = 4; },
        front: []
    },
    itemsMax2:{
        id: "itemsMax2",
        name: "储存单元高级扩张",
        desc: "增加一个道具栏上限",
        price: 30,
        //check: (pdi) => { return (pdi.level >= 1 && pdi.itemsMax == 4) },
        effect: (pdi) => { pdi.itemsMax = 5; },
        front: ["level1", "itemsMax1"],
    },

    missionsMax1:{
        id: "missionsMax1",
        name: "记忆单元扩张",
        desc: "增加一个任务栏上限与每日可完成任务上限",
        price: 20,
        //check: (pdi) => { return (pdi.missionsMax == 3) },
        effect: (pdi) => { pdi.missionsMax = 4; },
        front: []
    },
    missionsMax2:{
        id: "missionsMax2",
        name: "记忆单元高级扩张",
        desc: "增加一个任务栏上限与每日可完成任务上限",
        price: 30,
        //check: (pdi) => { return (pdi.level >= 1 && pdi.missionsMax == 4) },
        effect: (pdi) => { pdi.missionsMax = 5; },
        front: ["level1", "missionsMax1"]
    },

    orgasmBatteryGet1:{
        id: "orgasmBatteryGet1",
        name: "升级高潮充能元件",
        desc: "增加100%的高潮获得电量",
        price: 20,
        //check: (pdi) => { return (pdi.orgasmBatteryGet == 100) },
        effect: (pdi) => { pdi.orgasmBatteryGet = 200; },
        front: []
    },
    orgasmBatteryGet2:{
        id: "orgasmBatteryGet2",
        name: "进一步升级高潮充能元件",
        desc: "增加50%的高潮获得电量",
        price: 30,
        //check: (pdi) => { return (pdi.level >= 1 && pdi.orgasmBatteryGet == 200) },
        effect: (pdi) => { pdi.orgasmBatteryGet = 300; },
        front: ["level1", "orgasmBatteryGet1"]
    },

    displayTalkCost1: {
        id: "displayTalkCost1",
        name: "更换高性能显示屏",
        desc: "降低显示屏发言的消耗",
        price: 20,
        effect: (pdi) => { pdi.chatBatteryCost = 30; },
        front: []
    },
    displayTalkCost2: {
        id: "displayTalkCost2",
        name: "更换顶级显示屏",
        desc: "进一步降低显示屏发言的消耗",
        price: 30,
        effect: (pdi) => { pdi.chatBatteryCost = 15; },
        front: ["level1", "displayTalkCost1"]
    },
    dontShow: {
        id: "dontShow",
        name: "不显示，仅作注释使用",
        desc: "训练室可获得：training1，training2，training3，education1，education2，education3",
        price: 30,
        effect: (pdi) => { },
        front: ["dontShow"]
    }


}

var selectModify = "";
function ShowAvailableModify(target = null) {
    var pdi = PlayerDroneInfo();
    if (pdi.isDrone == false && target == null) {
        var input = (document.getElementById("InputChat"));
        input.value = '/DTS findtargetmodify []'
        SendMessageToSelf("请在方括号内输入目标ID并发送指令以获取目标无人机的可用改造", "ModifyRoom");
        return;
    }
    var list = [];
    for (var mod in allModify) {
        if (CanModify(allModify[mod], target) == false) continue
        list.push(Object.assign({}, allModify[mod]));
    }
    var string = "";
    for (var mod of list) {
        string += "\n";
        string += mod.name;
        if (target == null) {
            string += styleButton("选择", (id, desc, price) => {
                selectModify = id;
                SendMessageToSelf(`改造效果：${desc}，所需配额点数：${price}\n进入左方房间内改造舱以开始改造`, "ModifyRoom")
            }, mod.id, mod.desc, mod.price)
        }
        else {
            string += styleButton("选择", (id, desc, price) => {
                SendMessageToSelf(`改造效果：${desc}，所需配额点数：${price}\n对该无人机${styleButton("执行改造", () => {
                    if (target.ownerId != -1 && target.ownerId != Player.MemberNumber) {
                        SendMessageToSelf(`不具有对该无人机的操作权限`, "ModifyRoom");
                        return;
                    }
                    if (price > pdi.coin) {
                        SendMessageToSelf(`配额点数不足无法进行改造`, "ModifyRoom");
                        return;
                    }
                    else {
                        pdi.coin -= price;
                    }
                    SendDTSMsg(target, new MsgInfo("DoModifyByOwner",id))
                    SendMessageToSelf(`已发送改造命令`, "ModifyRoom");
                })}`, "ModifyRoom")
            }, mod.id, mod.desc, mod.price)
        }
    }
    SendMessageToSelf(`可用改造如下：${string}`, "ModifyRoom");

}

function CanModify(mod, target = null) {
    var pdi = null;
    if (target == null) {
        pdi = PlayerDroneInfo();
    }
    else {
        pdi = target;
    }
    if (pdi.modifys[mod.id] != undefined) return false;
    for (var front of mod.front) {
        if (!pdi.modifys[front]) return false;
    }
    return true;
}

const ModifyTile = {
    Areas: [
        { X: 10, Y: 5 },
    ],
    Exclude: [
    ],
    Enter: window["ModifyTileEnter"]
}

function ModifyTileEnter(nowInZone, paid = false) {
    var pdi = PlayerDroneInfo();
    MovePlayer(ModifyTile.Areas[0]);
    if (pdi.isDrone == false) {
        SendMessageToSelf(`非无人机不可进行改造`, "ModifyRoom");
        return;
    }
    if (!allModify[selectModify]) {
        SendMessageToSelf(`未选择改造`, "ModifyRoom");
        return;
    }
    if (CanModify(allModify[selectModify]) == false) {
        SendMessageToSelf(`已选择改造不可用`, "ModifyRoom");
        return;
    }
    if (paid == false) {
        if (allModify[selectModify].price > pdi.coin) {
            SendMessageToSelf(`配额点数不足无法进行改造，执行惩罚`, "ModifyRoom");
            DoPunishment(2, 3);
            return;
        }
        else {
            pdi.coin -= allModify[selectModify].price;
        }
    }
    WearEquips(Player, [Crate]);
    var select = selectModify;
    selectModify = "";
    SendMessageToSelf(`无人机已进入改造舱，关闭改造舱舱门，开始进行改造${styleProgressBar("正在改造", "改造完成", 30000, (select) =>
    {
        var pdi = PlayerDroneInfo();
        var mod = Object.assign({}, allModify[select]);
        mod.effect(pdi);
        pdi.modifys[select] = true;
        SendMessageToSelf(`改造已完成，打开改造舱舱门`, "ModifyRoom");
        RemoveRestrainByOneAssetGroup(Player, Crate.AssetGroup);
    }, select)}`);
}

function DoModifyByOwner(Modifyid) {
    selectModify = Modifyid;
    ModifyTileEnter(0, true);
}

const ShopRoom = {
    Areas: [
        { leftUp: { X: 20, Y: 2 }, rightDown: { X: 32, Y: 7 } },
    ],
    Exclude: [
    ],
    Enter: window["ShopRoomEnter"],
    Leave: window["ShopRoomLeave"]
}
function ShopRoomEnter() {
    SendMessageToSelf(`已进入商店，进入内侧房间以进行购物`, "ShopRoom");
}

function ShopRoomLeave() {
    ClearTagMessage("ShopRoom");
}

var allItem = [
    {
        item: "BatteryItem",
        price :10,
    },
    {
        item: "BindStatusDownItem",
        price: 15,
    },
    {
        item: "BindStatusUpItem",
        price: 5,
    },
    {
        item: "BodyStatusDownItem",
        price: 15,
    },
    {
        item: "BodyStatusUpItem",
        price: 5,
    },
    {
        item: "VibeItem",
        price: 10,
    },
    {
        item: "OrgasmLimitItem",
        price: 10,
    },
    {
        item: "DisplayTalkItem",
        price: 5,
    },
    {
        item: "PrivateRoomItem",
        price: 5,
    },
]

const ShopInnerRoom = {
    Areas: [
        { leftUp: { X: 25, Y: 2 }, rightDown: { X: 27, Y: 3 } },
        { leftUp: { X: 30, Y: 2 }, rightDown: { X: 32, Y: 3 } },
    ],
    Exclude: [
    ],
    Enter: window["ShopInnerRoomEnter"],
    Leave: window["ShopInnerRoomLeave"]
}

function ShopInnerRoomEnter() {
    var string = "可购买道具：";
    for (var itemAndPrice of allItem) {
        var i = ItemInfo[itemAndPrice.item]();
        string += "\n"
        string += i.text;
        string += " 价格：" + itemAndPrice.price;
        string += styleButton("购买", (item, price) => {
            var pdi = PlayerDroneInfo();
            if (pdi.coin < price) {
                SendMessageToSelf(`配额点数不足，无法购买`,"ShopInnerRoom");
                return;
            }
            if (pdi.items.length >= pdi.itemsMax) {
                SendMessageToSelf(`储存单元已满，无法购买`, "ShopInnerRoom");
                return;
            }
            pdi.items.push(ItemInfo[item.item]());
            pdi.coin -= price;
            SendMessageToSelf(`购买成功`, "ShopInnerRoom");
        }, itemAndPrice, itemAndPrice.price);
    }
    SendMessageToSelf(string, "ShopInnerRoom");
}

function ShopInnerRoomLeave() {
    ClearTagMessage("ShopInnerRoom");

}

const WorkRoom = {
    Areas: [
        { leftUp: { X: 0, Y: 12 }, rightDown: { X: 6, Y: 22 } },
    ],
    Exclude: [
    ],
    Enter: window["WorkRoomEnter"],
    Leave: window["WorkRoomLeave"]
}

function WorkRoomEnter() {
    SendMessageToSelf(`已进入办公室，进入内侧工位以进行工作`, "WorkRoom");
}
function WorkRoomLeave() {
    ClearTagMessage("WorkRoom");
    ClearTagMessage("WorkRoomWork");
}

const WorkInnerRoom = {
    Areas: [
        { leftUp: { X: 0, Y: 12 }, rightDown: { X: 1, Y: 13 } },
        { leftUp: { X: 5, Y: 12 }, rightDown: { X: 6, Y: 13 } },
        { leftUp: { X: 0, Y: 16 }, rightDown: { X: 1, Y: 17 } },
        { leftUp: { X: 0, Y: 20 }, rightDown: { X: 1, Y: 21 } },
        { leftUp: { X: 5, Y: 20 }, rightDown: { X: 6, Y: 21 } },
    ],
    Exclude: [
    ],
    Enter: window["WorkInnerRoomEnter"],
}
function WorkInnerRoomEnter() {
    SendMessageToSelf(`${styleButton("接取任务", TakeMission)}${styleButton("处理杂务", DoWork)}`, "WorkRoom");

}

function DoWork() {
    var p1 = Math.floor(Math.random() * 100);
    var p2 = Math.floor(Math.random() * 100);
    var p3 = Math.floor(Math.random() * 4);
    switch (p3) {
        case 0: {
            p3 = "+"
        }
            break;
        case 1: {
            p3 = "-"
        }
            break;
        case 2: {
            p3 = "*"
        }
            break;
        case 3: {
            p3 = "/"
        }
            break;
        default: {
            p3 = "+"
        }
            break;
    }
    var string = `${p1} ${p3} ${p2}`;
    var result = (new Function("return " + string))();
    var resultIndex = Math.floor(Math.random() * 4);
    var worngResult = [
        (result + Math.floor(Math.random() * 100 - 50)).toFixed(2),
        (result + Math.floor(Math.random() * 100 - 50)).toFixed(2),
        (result + Math.floor(Math.random() * 100 - 50)).toFixed(2),
    ]
    result = result.toFixed(2);
    string += ` = ?\n`;

    for (var i = 0; i < worngResult.length; i++) {
        if (i == resultIndex) {
            string += styleButton(result.toString(), () => {
                var pdi = PlayerDroneInfo();
                var reword = pdi.todaysWork >= pdi.workMax ? 0 : 2;
                pdi.coin += reword;
                pdi.todaysWork += reword;
                SendMessageToSelf(`答案正确，获得${reword}配额点数${reword == 0 ? "，已达到每日上限" : ""}`, "WorkRoom");
                ClearTagMessage("WorkRoomWork");
            });
        }
        string += styleButton(worngResult[i].toString(), () => {
            SendMessageToSelf(`答案错误`, "WorkRoom");
            ClearTagMessage("WorkRoomWork");
        });
    }
    if (resultIndex == 3) {
        string += styleButton(result.toString(), () => {
            var pdi = PlayerDroneInfo();
            var reword = pdi.todaysWork >= pdi.workMax ? 0 : 2;
            pdi.todaysWork += reword;
            SendMessageToSelf(`答案正确，获得${reword}配额点数${reword == 0 ? "，已达到每日上限": ""}`, "WorkRoom");
            ClearTagMessage("WorkRoomWork");
        });
    }
    SendMessageToSelf(string, "WorkRoomWork");


}
const OperRoomCrate ={
    Areas: [
        { X: 13, Y: 20 },
    ],
    Exclude: [
    ],
}

const OperRoom = {
    Areas: [
        { leftUp: { X: 12, Y: 18 }, rightDown: { X: 22, Y: 25 } },
    ],
    Exclude: [
        { leftUp: { X: 14, Y: 18 }, rightDown: { X: 18, Y: 19 } },
    ],
    Enter: window["OperRoomEnter"],
    Leave: window["OperRoomLeave"]
}

function OperRoomEnter() {
    SendMessageToSelf(`已进入操作员休息室`, "OperRoom");
}

function OperRoomLeave() {
    ClearTagMessage("OperRoom")
}

const Cat = {
    Areas: [
        { X: 19, Y: 24 }
    ],
    Exclude: [
    ],
    Enter: window["CatEnter"],
}
function CatEnter() {
    SendMessageToSelf(`这是猫`, "OperRoom");
}

const DancerRoom = {
    Areas: [
        { leftUp: { X: 14, Y: 18 }, rightDown: { X: 18, Y: 19 } },
    ],
    Exclude: [
    ],
}
const PrivateRoomCrate = {
    Areas: [
        { X: 12, Y: 12 },
        { X: 20, Y: 12 },
        { X: 22, Y: 12 },
    ],
    Exclude: [
    ],
}

const PrivateRoom = {
    Areas: [
        { leftUp: { X: 12, Y: 12 }, rightDown: { X: 15, Y: 16 } },
        { leftUp: { X: 17, Y: 12 }, rightDown: { X: 20, Y: 16 } },
        { leftUp: { X: 22, Y: 12 }, rightDown: { X: 27, Y: 16 } },
    ],
    Exclude: [
    ],
    Enter: window["PrivateRoomEnter"],
    Leave: window["PrivateRoomLeave"]
}

function PrivateRoomEnter() {
    var pdi = PlayerDroneInfo();
    if (pdi.isDrone) {
        SendMessageToSelf(`已进入私人房间`, "PrivateRoom");
    }
    else {
        SendMessageToSelf(`已进入私人房间，${styleButton("呼叫无人机侍寝", CallDroneToPrivateRoom)}`, "PrivateRoom");
    }
}

function CallDroneToPrivateRoom() {
    var input = (document.getElementById("InputChat"));
    input.value = '/DTS findtargetoprivate []'
    SendMessageToSelf("请在方括号内输入目标ID并发送指令");
}

const TrainingRoomBlackTile = {
    Areas: [
        { X: 34, Y: 13 },
        { X: 38, Y: 13 },
    ],
    Exclude: [
    ],
}

const TrainingRoom = {
    Areas: [
        { leftUp: { X: 33, Y: 12 }, rightDown: { X: 35, Y: 14 } },
        { leftUp: { X: 37, Y: 12 }, rightDown: { X: 39, Y: 14 } },
    ],
    Exclude: [
    ],
    Enter: window["TrainingRoomEnter"],
    Leave: window["TrainingRoomLeave"]
}

function TrainingRoomEnter(nowInZone) {
    SendMessageToSelf(`已进入训练室，站在黑色地砖上${styleButton("开始训练", StartTraining, nowInZone)}`, "TrainingRoom");

}
function TrainingRoomLeave(pverInZone) {
    if (isTraining) {
        SendMessageToSelf("训练完成前不允许离开训练室", "TrainingRoom");
        MovePlayer(TrainingRoomBlackTile.Areas[pverInZone]);
    }
    else {
        ClearTagMessage("TrainingRoom");
    }
}

var trainingMenu = [
    async () => {
        var pdi = PlayerDroneInfo();
        var waitTime = 3000;
        SendMessageToSelf("基础训练开始", "TrainingRoom");
        await sleep(waitTime);
        SendMessageToSelf("第一项训练，服从训练", "TrainingRoom");
        await sleep(waitTime);
        SendMessageToSelf("无人机应在被操作员抚摸头顶时，执行服从指令，应立即下跪，切换至服从姿态，限时20秒", "TrainingRoom");
        await sleep(waitTime);
        SendMessageToSelf("进入实践阶段", "TrainingRoom");
        await sleep(waitTime);
        var result = await WaitTrainingProcess(
            () => {
                SendMessageToSelf(`${styleProgressBar("被抚摸头顶", "结束", 20000)}`, "TrainingProc");
                RequirePoseinfo.RequireDronePose(["Kneel"], 20000, true);
            },
            () => {
                SendMessageToSelf("未检测到下跪行为，退回至上一步", "TrainingRoom");
            },
            1
        )
        if (result == false) {
            return;
        }
        SendMessageToSelf("第二项训练，复位训练", "TrainingRoom");
        await sleep(waitTime);
        SendMessageToSelf("无人机应在被操作员捏脸颊时，执行复位指令，应立即站起并将手放在身前，完成姿态复位，限时20秒", "TrainingRoom");
        await sleep(waitTime);
        SendMessageToSelf("进入实践阶段", "TrainingRoom");
        await sleep(waitTime);
        var result = await WaitTrainingProcess(
            () => {
                SendMessageToSelf(`${styleProgressBar("被捏脸颊", "结束", 20000)}`, "TrainingProc");
                RequirePoseinfo.RequireDronePose(["BaseLower", "LegsClosed"], 20000, true);
                RequirePoseinfo.RequireDronePose(["BaseUpper"], 20000, true);
            },
            () => {
                SendMessageToSelf("未检测到站起行为，退回至上一步", "TrainingRoom");
            },
            2
        )
        if (result == false) {
            return;
        }
        SendMessageToSelf("第二项训练完成，进入下一项训练", "TrainingRoom");
        await sleep(waitTime);
        SendMessageToSelf("第三项训练，自检训练", "TrainingRoom");
        await sleep(waitTime);
        SendMessageToSelf("无人机应在被操作员抚摸小腹/肚子时，执行自检指令，应立即抚摸自身任意部位三次，以完成自检流程，限时20秒", "TrainingRoom");
        await sleep(waitTime);
        SendMessageToSelf("进入实践阶段", "TrainingRoom");
        await sleep(waitTime);
        var result = await WaitTrainingProcess(
            () => {
                SendMessageToSelf(`${styleProgressBar("被抚摸小腹", "结束", 20000)}`, "TrainingProc");
                RequireActivityinfo.RequireDroneActivity([], ["Caress"], 0, 20000, 3, true);
            },
            () => {
                SendMessageToSelf("未检测到自检行为，退回至上一步", "TrainingRoom");
            },
            1

        )
        if (result == false) {
            return;
        }
        SendMessageToSelf("第三项训练完成，基础训练全部完成", "TrainingRoom");
        await sleep(waitTime);
        SendMessageToSelf("实际环境中收到指令时不会显示进度条提示，需以接收到的动作为准", "TrainingRoom");
        pdi.modifys["training1"] = true;
    },
    async () => {
        var pdi = PlayerDroneInfo();
        var waitTime = 3000;
        SendMessageToSelf("进阶训练开始", "TrainingRoom");
        await sleep(waitTime);
        SendMessageToSelf("第一项训练，待机训练", "TrainingRoom");
        await sleep(waitTime);
        SendMessageToSelf("无人机应在被操作员捏小腹/肚子时，执行待机指令，应立即双手背后且双腿并拢，切换至待机姿态，限时20秒", "TrainingRoom");
        await sleep(waitTime);
        var result = await WaitTrainingProcess(
            () => {
                SendMessageToSelf(`${styleProgressBar("被捏小腹", "结束", 20000)}`, "TrainingProc");
                RequirePoseinfo.RequireDronePose(["LegsClosed"], 20000, true);
                RequirePoseinfo.RequireDronePose(["BackBoxTie","BackElbowTouch"], 20000, true);
            },
            () => {
                SendMessageToSelf("未检测到待机行为，退回至上一步", "TrainingRoom");
            },
            2
        )
        if (result == false) {
            return;
        }
        SendMessageToSelf("第一项训练完成，进入下一项训练", "TrainingRoom");
        await sleep(waitTime);
        SendMessageToSelf("第二项训练，侍奉训练", "TrainingRoom");
        await sleep(waitTime);
        SendMessageToSelf("无人机应在附近的操作员摇晃自己身体的任意部位时时，执行侍奉指令，应用口塞亲吻对应部位，以完成侍奉流程，限时20秒，检测范围3*3格", "TrainingRoom");
        await sleep(waitTime);
        SendMessageToSelf("在本次训练中，以摇晃对应部位代替用口塞亲吻", "TrainingRoom");
        await sleep(waitTime);
        SendMessageToSelf("进入实践阶段", "TrainingRoom");
        await sleep(waitTime);
        var result = await WaitTrainingProcess(
            () => {
                SendMessageToSelf(`${styleProgressBar("摇晃脚", "结束", 20000)}`, "TrainingProc");
                RequireActivityinfo.RequireDroneActivity(["ItemBoots"], ["Wiggle"], 0, 20000, 1, true);
            },
            () => {
                SendMessageToSelf("未检测到侍奉行为，退回至上一步", "TrainingRoom");
            },
            1
        )
        if (result == false) {
            return;
        }
        await sleep(waitTime);
        SendMessageToSelf("检测到侍奉行为，进行下一实践", "TrainingRoom");
        await sleep(waitTime);
        var result = await WaitTrainingProcess(
            () => {
                SendMessageToSelf(`${styleProgressBar("摇晃手指", "结束", 20000)}`, "TrainingProc");
                RequireActivityinfo.RequireDroneActivity(["ItemHands"], ["Wiggle"], 0, 20000, 1, true);
            },
            () => {
                SendMessageToSelf("未检测到侍奉行为，退回至上一步", "TrainingRoom");
            },
            1
        )
        if (result == false) {
            return;
        }
        SendMessageToSelf("第二项训练完成，进阶训练全部完成", "TrainingRoom");
        pdi.modifys["training2"] = true;

    },
    //async () => {

    //},
]
async function WaitTrainingProcess(DoAtStart, DoAtFail, maxTrainingProcess) {
    var toNext = false;
    var retryCount = 0;
    var pdi = PlayerDroneInfo();
    while (toNext == false) {
        trainingProcess = 0;
        DoAtStart();
        for (var i = 0; i < 20; i++) {
            await sleep(1000);
            if (pdi.battery < pdi.batteryMax / 2) {
                pdi.battery = pdi.batteryMax / 2;
            }
            if (trainingProcess >= maxTrainingProcess) {
                toNext = true;
                break;
            }
        }
        if (toNext == false) {
            retryCount++;
            if (retryCount >= 3) {
                SendMessageToSelf("多次重试失败，训练中止", "TrainingRoom");
                ClearTagMessage("TrainingProc");
                return false;
            }
            DoAtFail();
            ClearTagMessage("TrainingProc");

        }
    }
    return true;

}

var isTraining = false;
async function StartTraining(nowInZone) {
    if (IsInArea(Player.MapData.Pos, TrainingRoomBlackTile.Areas[nowInZone]) == false) {
        SendMessageToSelf("不位于黑色地砖上", "TrainingRoom");
        return;
    }
    ClearTagMessage("TrainingRoom");
    var pdi = PlayerDroneInfo();
    var trainingIndex = pdi.level;
    if (pdi.isDrone == false) {
        SendMessageToSelf("受训者非无人机，执行基础训练", "TrainingRoom");
        trainingIndex = 0;
    }
    if (trainingIndex >= trainingMenu.length) {
        trainingIndex = trainingMenu.length - 1;
    }
    isTraining = true;
    await trainingMenu[trainingIndex]();
    isTraining = false;
}



const EducationRoom = {
    Areas: [
        [{ X: 34, Y: 22 }, { X: 36, Y: 22 }, { X: 38, Y: 22 }]
    ],
    Exclude: [
    ],
    Enter: window["EducationRoomEnter"],
    Leave: window["EducationRoomLeave"]
}

function EducationRoomEnter(nowInZone) {
    SendMessageToSelf(`已进入教育室，${styleButton("开始教育", StartEducation)}`, "EducationRoom");

}
function EducationRoomLeave(pverInZone) {
    ClearTagMessage("EducationRoom");
}
var educationMenu = [
    async () => {
        var pdi = PlayerDroneInfo();
        var waitTime = 2000;
        WearEquips(Player, [CrateBind]);
        SendMessageToSelf("基础教育开始", "EducationRoom");
        await sleep(waitTime);
        SendMessageToSelf("催眠装置部署完成，开始催眠", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("催眠装置部—完成，开—催眠", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("催眠——部—完成，开——眠", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("催眠——————，————", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("————————，————", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("—————，———，———", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("我—身份—，—人—，人——", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        await WaitEducationProcess("我的身份是", "无人机", "人类");
        await WaitEducationProcess("我的存在意义是", "服从", "寻找自我");
        await WaitEducationProcess("主人摸我的头时，我应该", "感到兴奋", "无动于衷");
        SendMessageToSelf(`${styleProgressBar("被抚摸头顶", "结束", waitTime * 2)}`, "EducationRoomClear");
        await sleep(waitTime);
        DoOrgasm();
        await sleep(15000);
        SendMessageToSelf(`${styleProgressBar("被抚摸头顶", "结束", waitTime * 2)}`, "EducationRoomClear");
        await sleep(waitTime);
        DoOrgasm();
        await sleep(15000);
        SendMessageToSelf(`${styleProgressBar("被抚摸头顶", "结束", waitTime * 2)}`, "EducationRoomClear");
        await sleep(waitTime);
        DoOrgasm();
        await sleep(15000);
        await WaitEducationProcess("本机的身份是", "无人机", "人类");
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("本机—身份—，—人—，人——", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("—————，———，———", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("催眠————，————", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("催—流——成，——程——成功—装", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("催眠流程完成，奖励程序已成功安装", "EducationRoomClear");
        await sleep(waitTime);
        SendMessageToSelf("被抚摸头顶时，有概率会引发高潮", "EducationRoomClear");
        RemoveRestrainByOneAssetGroup(Player, Crate.AssetGroup);
        if (pdi.battery < pdi.batteryMax / 2) {
            pdi.battery = pdi.batteryMax / 2;
        }
        pdi.modifys["education1"] = true;
    },
    async () => {

        var pdi = PlayerDroneInfo();
        var waitTime = 2000;
        WearEquips(Player, [CrateBind]);
        SendMessageToSelf("进阶教育开始", "EducationRoom");
        await sleep(waitTime);
        SendMessageToSelf("催眠装置部署完成，开始催眠", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("催眠装置部—完成，开—催眠", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("催眠——部—完成，开——眠", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("催眠——————，————", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("————————，————", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("—————，———，———", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("本—身份—，—人—，人——", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        await WaitEducationProcess("本机的身份是", "无人机", "人类");
        await WaitEducationProcess("本机的名字是", `无人机${Player.MemberNumber}`, Player.Name);
        await WaitEducationProcess("本机的即将高潮时，本机应当", `忍耐`, `放纵`);
        await WaitEducationProcess("若本机意外高潮时，本机应感到", `愧疚`, `爽`);
        DoOrgasm();
        await sleep(15000);
        DoOrgasm();
        await sleep(15000);
        DoOrgasm();
        await sleep(15000);
        await WaitEducationProcess("本机的身份是", "无人机", "无人机");
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("本机—身份—，—人—，人——", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("—————，———，———", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("催眠————，————", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("催—流——成，——程——成功—装", "EducationRoomClear");
        await sleep(waitTime);
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf("催眠流程完成，愧疚程序已成功安装", "EducationRoomClear");
        await sleep(waitTime);
        SendMessageToSelf("未能忍耐高潮时，随机部位拘束上升1", "EducationRoomClear");
        RemoveRestrainByOneAssetGroup(Player, Crate.AssetGroup);
        if (pdi.battery < pdi.batteryMax / 2) {
            pdi.battery = pdi.batteryMax / 2;
        }
        pdi.modifys["education2"] = true;
    },
    //async () => {

    //},
]

async function WaitEducationProcess(text1, text2, text3) {
    var toNext = false;
    var choiced = false;
    var waitTime = 2000;
    while (toNext == false) {
        var choiced = false;
        ClearTagMessage("EducationRoomClear");
        SendMessageToSelf(`${text1}${styleButton(text2, () => { toNext = true; choiced = true })}，${styleButton(text3, () => { DoPunishment(2, 3); choiced = true })}`, "EducationRoomClear");

        //SendMessageToSelf(`我的身份是，${styleButton("无人机", () => { toNext = true; choiced = true })}，${styleButton("人类", () => { DoPunishment(2, 3); choiced = true })}`, "EducationRoomClear");
        await waitFor(() => { return choiced == true });
        ClearTagMessage("EducationRoomClear");
        await sleep(waitTime);
    }
}

var isEducationing = false;
async function StartEducation(nowInZone) {
    ClearTagMessage("EducationRoom");
    var pdi = PlayerDroneInfo();
    var educationIndex = pdi.level;
    if (pdi.isDrone == false) {
        SendMessageToSelf("受训者非无人机，执行基础教育", "EducationRoom");
        educationIndex = 0;
    }
    if (educationIndex >= trainingMenu.length) {
        educationIndex = trainingMenu.length - 1;
    }
    isEducationing = true;
    await educationMenu[educationIndex]();
    isEducationing = false;
}

const ChargeRoom = {
    Areas: [
        [
            { X: 1, Y: 10 },
            { X: 38, Y: 10 },
            { X: 1, Y: 25 },
            { X: 38, Y: 25 },
            { X: 8, Y: 30 },
            { X: 18, Y: 30 },
        ]
    ],
    Exclude: [
    ],
    Enter: window["ChargeRoomEnter"],
    Leave: window["ChargeRoomLeave"]
}
function ChargeRoomEnter() {
    var pdi = PlayerDroneInfo();
    SendMessageToSelf(`位于充电桩上，${styleButton(`开始充电`, ChargeRoomCharge)}`, "ChargeRoom");
}
function ChargeRoomLeave() {
    ClearTagMessage("ChargeRoom")
    var inv = InventoryGet(Player, "ItemDevices");
    if (inv?.Asset?.Name == "OneBarPrison") {
        RemoveRestrainByOneAssetGroup(Player, "ItemDevices");
    }
}
function ChargeRoomCharge() {
    WearEquips(Player, [OneBar]);
    SendMessageToSelf(styleProgressBar("正在充电", "充电完成", 60000, ChargeComplete), "ChargeRoom");
}

function ChargeComplete() {
    var pdi = PlayerDroneInfo();
    pdi.battery = pdi.batteryMax;
    RemoveRestrainByOneAssetGroup(Player, "ItemDevices");

}


var AllZoneList = [StockRoom, Elevator, SleepRoom, ModifyRoom, ModifyTile, ShopRoom, ShopInnerRoom, WorkRoom, WorkInnerRoom, OperRoom, Cat, DancerRoom, PrivateRoom, TrainingRoom, EducationRoom, ChargeRoom, SleepEnterZone, SleepEnterTiles]
var map = {
    "Type": "Always",
    "Tiles": "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҲҲҲҴҴҲҲҲҴҴҴҴҴҴҴ¬yyyyyҴҴҴҳҳҳҴҴҴyyyyтyyyҴҴªªªҴҴªªªтyyyyyyyyyyyyҴҴҳ«««ҳҴтyyyyтyyyҴҴªªªҴҴªªªтyyyyyyyyyyyyҴҴ«ҳ«ҳ«ҴКyyyyтyyyҴҴҴҴҴҴҴҴҴҴтyyyyyyyyyyyyҴҴ«««««ҴҴyyyyтyyyyyyyyyyyyyтyyyyyyyyyyyyҴҴ«ҳ«ҳ«ÇÇyyyyтyyyyyyyyyyyyyтyyyyyyyyyyyyҴҴҳ«««ҴҴтyyyyтyyyyyyyyyyyyyтyyyyyyҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҳ«ҳyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyҳ«ҳ«¬«yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy«¬«ҲҲҴҴҴҲҲҴyyyҴААААҴААААҴААААААҴyyyҴҳҳҳҴҳҳҳªªҴҴҴªªҴyyyҴҴҴҴyyyҴ«««Ҵ«««ªªҴҴҴªªҴyyyҴҴҴҴyyyҴ«¬«Ҵ«¬«¬¬¬¬¬¬¬ҴyyyҴҴҴҴyyyҴ«««Ҵ«««ҲҲҴ¬ҴҴҴҴyyyҴҴҴҴyyyҴҴҴҴҴҴҴҴªªҴ¬¬¬¬ҴyyyҴҴҴҴyyyҴyyyyyyyªªҴ¬¬¬¬ҴyyyҴҴҴЮЮЮЮЮҴҴҴҴҴҳҳҳҳҴyyyҴyyyyyyy¬¬¬¬¬¬¬ÇyyyҴxЮ¬¬¬Юxxxҳ«««ҴyyyÇyyyyyyyҲҲҴ¬ҴҲҲҴyyyҴxЮЮxxxҳ««ҳҳҴyyyҴҳ¬ҳ¬ҳ¬ҳªªҴ¬ҴªªҴyyyҴxxxxxxxxxxxҳ«««ҴyyyҴҴҳҴҳҴҳҴªªҴ¬ҴªªҴyyyҴxxxxxxxxxxxҳ««ҳҳҴyyyҴҴ«Ҵ«Ҵ«Ҵ¬¬¬¬¬¬¬ҴyyyҴxxxxxxxxxxxҳ«««ҴyyyҴҴ«Ҵ«Ҵ«ҴҴҴҴҴҴҴҴҴyyyҴxxxxxxxxxxxҳ««ҳҳҴyyyҴҴҴҴҴҴҴҴҳ«ҳyyyyyyyyҴxxxxxxxxxxxҳ«««Ҵyyyyyyyyҳ«ҳ«¬«yyyyyyyyҴxxxxxxxxxxxҳ««ҳҳҴyyyyyyyy«¬«ҴҴҴҴҴҴҴyyyyҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴҴyyyyҴҴҴҴҴҴҴyyyyyyҴyyyyyyyyyyyyyyyyyyyyyyyyyyҴyyyyyyyyyyyyҴyyyyyyyyyyyyyyyyyyyyyyyyyyҴyyyyyyyyyyyyҴҳ«ҳyyyyyyyҳ«ҳyyyyyyyyyҳҳҳҳҴyyyyyyyyyyyyҴ«¬«yyyyyyy«¬«yyyyyyyyyҳ«««ҴyyyyyyyyyyyyҴҳ«ҳyyyyyyyҳ«ҳyyyyyyyyyҳ«««ҴyyyyyyyyyyyyҴyyyyyyyyyyyyyyyyyyyyyyÇ«««ҴyyyyyyҴҴҴҴҴҴҴҴҴҴҴҴЮЮЮЮЮҴҴҴҴҴҴҴҴҴҴyҴҴҴҴҴҴҳҳҳҳҳҳææëëëðëëëææҴxxxxxҴҲҲҲҲҳҳҳҳҴҴҴҴҲҲҲҴ««««««ææëëëðëëëææҴxxxxxҴªªªҲ«««ҳ¬¬¬ҴªªªҴ««««««ææëëëëëëëææҴxxxxxҴªªªҲ«««ҳ¬¬¬ҲªªªҴ««««««ææëëëðëëëææÇxxxxxÇªªªҲ«««ҳ¬¬¬ÇªªªҴ««««««ææëëëðëëëææҴxxxxxҴҲҲҲҳҳҳҳҳҳҳҳҴҲҲҲҴ««««««ææëëëëëëëææҴЮЮЮЮЮҴyyұ«ҳ«ҳ«ҳ«ҳyyyyҴ««««««",
    "Objects": "ҴӄӃҶұҳҹddddddddddddddddddddddddddddddddddddddddddddddddddd೥ddddddd೦೧ddd೦೧dddddddƂƂƂƂƂұdddddddddшшшddŀddddшddddшdddҴƂƂƂƂƂdddddddddddddddddddddиddddddddddddddddddƂƂƂƂƂҲdddddddddžſddddƀƁddd೥ྴddd೥ྴdҵƂƂƂƂƂddddddddddшddྴྴdddddddddddddddddddddddddƂƂƂƂƂҳddddddddddddddddddddddddddddҶƂƂƂƂƂdddddddddddddddŀdddddddddddddddddddddddddddddྴdddddddddddྴdddྴddddddddddddྴddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd೦೧ddd೦೧dddddd௪ddddd௪ddddd௪dddddddd೥ddd೥džſdddžſdddddшżdddddżшdшd࠲żdddddddиdшdиdшddddddddddddddːːdːːdddddddːːdddddddddddddddddddddddddddϼdϼdddddddddϼdddddddddddd೦೧ddd೥ddddddࠖࠖdddddࠖࠖdࠖࠖdd˚˚ddddddྴdddྴdžſdddddddddddddŀdŀdddddddddŀdddddddddddddddddddྴddddྶdddddddྶdྶdddddddddྴdddddddddddddddddddїdтdтdтdјdљdіќdddddddddddddd೦೧ddd೦೧dddddddࠖࠖࠖࠖࠖdddddddddddddddddddddžſdddžſddddddшdddddŀddddїјddddddddྴdྴdྴddddddddddddddddˤˤˤdżdddddddddddddddddddddddddddddddddddˆˆˆddddddїўddddddddшdшdшdddddddddddddddddddddddddddddddddddddddddddddddddddddƂƂddddd̪ddddјњddddddddddddddddddddddddddžſdddddddddddddddddddddddddddddddྴdddddddddddddddྶྐྵdྸdddddddddྴdddddƂƂƂƂƂҷddddddddddddddddddddddddddddҺƂƂƂƂƂddddddddddddddddddddddddddddddddddddddddƂƂƂƂƂҸddddddddddddddddddddddddddddһƂƂƂƂƂddddddddddddddddddddddddddddddddddddddddƂƂƂƂƂҹdddddddddddddddddddddddྸddddҼƂƂƂƂƂddddddddddddddddddddddddddddddddddddddddೋdddddddddೋdddddddddddddddddddddddddddddnsdddddddddddиdddddddddddddྴddddddшшшшшшddddddddddddƀƁddddddddddddddddddddшшшшшшdddddddddddྴdddddྷdddddddddddྐྵddddшшшшшшddddddddddddddddddddddddddddddddddшшшшшшdddddddddddd࠲d࠲d࠲dddddddddddddddddшшшшшшddddddddddddddddddddddddddddddddddшшшшшш"
}


var pverPos = null;

async function ExpendInit() {
    await waitFor(() => initComplete == true)
    InstallHook("PlayerMoved", null, null, PlayerMovedFaci)
    InstallHook("ChargeComplete", null, null, function MissionInfoProgressAddChargeComplete() { MissionInfo.ProgressAdd("Charge"); })
    InstallHook("DoPer10Sec", null, null, CheckSleepUntil);
    //InitMap();
}
async function InitMapFaci() {
    ChatRoomData.Name = "DroneFacility";
    ChatRoomData.desc = "[Script]无人机训练设施   需要加载插件，地址：https://greasyfork.org/zh-CN/scripts/574984-dronetrainingsystem"
    ChatRoomData.Limit = 20;
    ChatRoomData.Access = ['All'];
    ChatRoomData.Visibility = ['All'];
    ChatRoomData.Private = false;
    ChatRoomData.MapData = Object.assign({}, map);
    ServerSend("ChatRoomAdmin", { MemberNumber: Player.ID, Room: ChatRoomGetSettings(ChatRoomData), Action: "Update" });
    for (var char of ChatRoomCharacter) {
        ChatRoomMapViewTeleport(char.MemberNumber, { X: 1, Y: 37 });
        await sleep(200);
    }
    MovePlayer({ X: 1, Y: 37 })
}


async function PlayerMovedFaci() {
    //校验地图是否正确
    if (ChatRoomData.MapData.Objects.startsWith("ҴӄӃҶұҳҹ") == false) return;
    var pdi = PlayerDroneInfo();
    Player.MapData.PrivateState.HasKeyBronze = true;
    Player.MapData.PrivateState.HasKeyGold = pdi.isOwner;
    Player.MapData.PrivateState.HasKeySilver = pdi.isDrone;

    if (pverPos == null) {
        pverPos = { X: 0, Y: 0 };
    }
    for (let zoneKey in AllZoneList) {
        if ((AllZoneList[zoneKey].Enter ?? false) == false &&
            (AllZoneList[zoneKey].Leave ?? false) == false &&
            (AllZoneList[zoneKey].Moved ?? false) == false)
            continue;
        let nowInZone = IsInZone(Player.MapData.Pos, AllZoneList[zoneKey])
        let pverInZone = IsInZone(pverPos, AllZoneList[zoneKey])
        if (AllZoneList[zoneKey].Enter) {
            if (nowInZone !== false && pverInZone === false)
            AllZoneList[zoneKey].Enter(nowInZone);
        }
        if (AllZoneList[zoneKey].Leave && nowInZone === false && pverInZone !== false) {
            AllZoneList[zoneKey].Leave(pverInZone)
        }
        if (AllZoneList[zoneKey].Moved && nowInZone !== false) {
            AllZoneList[zoneKey].Moved(nowInZone)
        }
    }
    pverPos = Object.assign({}, Player.MapData.Pos);
}

async function CheckSleepUntil() {
    if (ChatRoomData.MapData.Objects.startsWith("ҴӄӃҶұҳҹ") == false) return;
    var pdi = PlayerDroneInfo();
    if (pdi.sleepUntil == null) return;
    if (pdi.sleepUntil < Date.now()) {
        pdi.sleepUntil = null;
        SendMessageToSelf(`休眠完成，即将移动至设施主要区域`);
        await sleep(2000);
        MovePlayer(RandomPosOfArea(Elevator.Areas[3]));
        RemoveRestrainByOneAssetGroup(Player, Crate.AssetGroup);
        return;
    }
    if (IsInZone(Player.MapData.Pos, SleepRoom) === false) {
        WearEquips(Player, [Crate]);
        MovePlayer(RandomPosOfArea(SleepRoom.Areas[0]), true);
    }
}



ExpendInit();
